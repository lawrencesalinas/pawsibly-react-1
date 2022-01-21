import React, { useState } from "react";
import AllListings from "./AllListings";
import { Icon, Parallax } from "react-materialize";

const HomeScreen = (props) => {
  // console.log('props in home for sitters', props)

  const [searchResults, setSearchResults] = useState([]);

  const searchItems = (e) => {
    e.preventDefault();
    // console.log('zipcode', e.target.zipcode.value)
    let search = e.target.zipcode.value;
    // console.log('sitter props', props.allSitters)
    const filteredListings = props.allSitters.filter((u) => {
      return u.zipcode.toString().includes(search.toString());
    });
    setSearchResults(filteredListings);
    // console.log('sitters search results', filteredListings)
  };
  return (
    <>
      <div className="section white">
        <div className="row container" class="center-align">
          <h2 className="header">find sitters near you by zip code</h2>
          <form onSubmit={searchItems}>
            <div className="input-field">
              <input id="zipcode" type="number" name="zipcode" required />
              <button
                type="submit"
                class="btn-floating btn-large waves-effect waves-light red accent-2"
              >
                <i class="material-icons">send</i>
              </button>
              <label>
                <Icon>search</Icon>
              </label>
            </div>
          </form>
          <AllListings allSitters={searchResults} />
        </div>
      </div>
      <div>
        <Parallax
          image={<img alt="" src="/cat.jpg" />}
          options={{
            responsiveThreshold: 0,
          }}
        />
        <div className="section white">
          <div className="row container" class="center-align">
            <h2 className="header">search for a nearby sitter</h2>
            <p className="grey-text text-darken-3 lighten-3">
              With Pawsibly, your pet stays in a sitter's home, whether you're
              traveling for a few days or just out for the day. Here's how it
              works.
            </p>
            <div class="row" style={{ marginTop: "50px" }}>
              <div class="col s4">
                {/* Promo Content 1 goes here */}
                <i class="large material-icons">search</i>
                <h3>1. find a sitter near you</h3>
              </div>
              <div class="col s4">
                {/* Promo Content 2 goes here */}
                <i class="large material-icons">schedule</i>
                <h3>2. schedule a booking</h3>
              </div>
              <div class="col s4">
                {/* Promo Content 3 goes here  */}
                <i class="large material-icons">comment</i>
                <h3>3. leave a review</h3>
              </div>
            </div>
          </div>
        </div>
        <Parallax
          image={<img alt="" src="/dog.jpg" />}
          options={{
            responsiveThreshold: 0,
          }}
        />
      </div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">About</h5>
              <p class="grey-text text-lighten-4">
                We are three software developers who wanted to create an easy
                and reliable source for pet owners to find a caretaker when
                they're busy or traveling.{" "}
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Contributors</h5>
              <ul>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/galyverasi"
                  >
                    Galyver Asi
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/kellylarrea"
                  >
                    Kelly Larrea
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/lawrencesalinas"
                  >
                    Lawrence Salinas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2022 Pawsibly
            <a
              class="grey-text text-lighten-4 right"
              style={{ textDecoration: "none" }}
              href="https://github.com/kellylarrea/pawsibly-react"
            >
              Learn more on GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeScreen;
