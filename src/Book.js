import React from 'react';

const handleClick = (e) => {
  alert('hii');
};
const moreComplexExample = (author) => {
  console.log(author);
};
const Book = ({ book }) => {
  const { img, title, author, children } = book;
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
      <button type='button' onClick={handleClick}>
        reference example
      </button>
      <button type='button' onClick={() => moreComplexExample(author)}>
        reference example
      </button>
    </article>
  );
};

export default Book;
