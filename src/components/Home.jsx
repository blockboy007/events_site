import React from "react";
import { Link } from "react-router-dom";
import './Home.css';


function Home() {
  return (
    <body className="all">
      <div className="upper" >
      </div>
      <div class="cover-container">
        <main className="home-text">
          <h1>Welcome to Ever After Events</h1>
          <p class="lead">Our goal is to make your event as great as possible</p>
        </main>
      </div>
      <section className="second">

        <div className="columns">

          <div className="column">
            <Link className="link" to="/contact">
              <div className="col-img" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`}} >
                <div className="col-text">
                    <h1>Contact</h1>
                    <p>Send us your info to begin planning an event</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="column">
            <div>
              <Link className="link" to="/portfolio">
                <div className="col-img" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`}} >
                  <div className="col-text">
                      <h1>Portfolio</h1>
                      <p>this is the second one</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="column">
            <div>
              <Link className="link" to="/packages">
                <div className="col-img" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1625755568824-c27ef71d62a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`}}>
                  <div className="col-text">
                      <h1>Packages</h1>
                      <p>this is the third one</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>

        </section>
      <section className="box">
         <div className="middle">
          <a className="btn" href="https://www.facebook.com/trista.klassen.9">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn" href="#">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn" href="https://www.instagram.com/tristareardon/">
            <i className="fab fa-instagram"></i>
          </a>
         </div>
      </section>
    </body>

  );
}

export default Home;
