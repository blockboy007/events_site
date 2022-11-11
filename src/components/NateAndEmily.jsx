import React from 'react';
import './PortfolioLinks.css';

const nateEmilyImages = ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
"https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"]

const photos = nateEmilyImages.map((image) =>
  <a className='pp' href={image}>
    <img  src={image} />
  </a>
)

function NateAndEmily() {
  return (
    <body className="portfolioLinksBody">
      <div className="one">
        <h1 className='portfolioHeading'>Nate and Emily</h1>
        <div className="photos">
          {photos}
        </div>
      </div>
    </body>

  );
}

export default NateAndEmily;
