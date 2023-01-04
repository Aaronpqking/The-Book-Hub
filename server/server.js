// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');

// // Import the GraphQL schema and resolvers
// const { typeDefs, resolvers } = require('./schemas/order');

// // Import the database connection
// const db = require('./config/connection');

// // Set the server port to 3005 or the value of the PORT environment variable if it is set
// const PORT = process.env.PORT || 3005;

// // Initialize the Express app
// const app = express();

// // Initialize the Apollo server with the GraphQL schema
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Use JSON parsing and serve static files from the client/build folder in production
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // Listen for GET requests to the root route and serve the index.html file from the client/build folder
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// // Async function to start the Apollo server and apply the middleware to the Express app
// const startApolloServer = async (typeDefs, resolvers) => {
//   // Start the Apollo server
//   await server.start();

//   // Apply the middle
//   server.applyMiddleware({ app });

//   // Open the database connection and start the server once the connection is open
//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   })
//   };
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

// bring in the GraphQL-Express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// create GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// initialize the express server
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize passport for JWT auth
app.use(passport.initialize());

// bring in passport JWT strategy
require('./passport')(passport);

// enable CORS
app.use(cors());

// create GraphiQL application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// connect GraphQL middleware to the /graphql route
app.use('/graphql', passport.authenticate('jwt', { session: false }), graphqlExpress(req => ({
  schema,
  context: {
    user: req.user
  }
})));

// start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);