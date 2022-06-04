import React from 'react';

const Addbook = () => (
  <>
    <div>
      <h1> Add new Book</h1>
      <form>
        <input type="text" name="title" value="A story" placeholder="Add title..." />
        <input type="text" name="author" value="by maqueen" placeholder="Add author..." />
        <button type="submit">submit</button>
      </form>
    </div>
  </>
);

export default Addbook;
