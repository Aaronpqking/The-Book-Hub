// import React, { useState } from 'react';
// import  from './BookCard';

// const SearchResultsPage = ({ searchResults }) => {
//     const [selectedBook, setSelectedBook] = useState(null);

//     return (
//         <div>

//           {searchResults && searchResults.length > 0 ? (
//             <div>
//               <h2>Search Results</h2>
//               <div>
//                 {searchResults.map((book) => (
//                   <BookCard
//                     key={book._id}
//                     book={book}
//                     onClick={() => setSelectedBook(book)}
//                   />
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2>No results found</h2>
//             </div>
//           )}
//           {selectedBook && (
//             <div>
//               <h2>Selected Book</h2>
//               <BookCard book={selectedBook} />
//             </div>
//           )}
//         </div>
//     );
// };

// export default SearchResultsPage;

// import React, { useState } from 'react';
// import BookCard from './BookCard';

// const SearchResultsPage = ({ searchResults }) => {
//   const [selectedBook, setSelectedBook] = useState(null);

//   return (
//       <div>
//     {searchResults && <SearchResultsPage results={searchResults} />}

//       {searchResults.length > 0 ? (
//         <div>
//           <h2>Search Results</h2>
//           <div>
//             {searchResults.map((book) => (
//               <BookCard
//                 key={book._id}
//                 book={book}
//                 onClick={() => setSelectedBook(book)}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h2>No results found</h2>
//         </div>
//       )}
//       {selectedBook && (
//         <div>
//           <h2>Selected Book</h2>
//           <BookCard book={selectedBook} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResultsPage;
import React, { useState } from 'react';
import BookCard from './BookCard';

const SearchResultsPage = ({ searchResults }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      {searchResults && <SearchResultsPage results={searchResults} />}
      {/* <SearchResultsPage searchTerm={searchTerm} /> */}

      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <div>
            {searchResults.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>No results found</h2>
        </div>
      )}
      {selectedBook && (
        <div>
          <h2>Selected Book</h2>
          <BookCard book={selectedBook} />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
