import React from 'react';
import './PortfolioLinks.css';

const samHeatherImages = ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1613067532743-33c628bc7e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
"https://images.unsplash.com/photo-1483136781463-b71cca943b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80",
"https://images.unsplash.com/photo-1551468307-8c1e3c78013c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"]

const photos = samHeatherImages.map((image) =>
  <a className='pp' href={image}><img  src={image} /></a>
)

function SamAndHeather() {
  return (
    <body className="portfolioLinksBody">
      <div className="one">
        <h1 className='portfolioHeading'>Sam and Heather</h1>
        <div className="photos">
          {photos}
        </div>
      </div>
    </body>

  );
}

export default SamAndHeather;
