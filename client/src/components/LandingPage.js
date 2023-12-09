import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header class=" sticky-top headercolor text-light text-center py-3">
        <img src="logo.jpg" class="img-thumbnail logo" alt="logo" />
        <h1>Driver's Crash Course</h1>
      </header>

      <nav class="navbar navbar-expand-lg navcolor topnav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item navalign active">
              <a class="nav-link homelink" href="#">
                login<span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item navalign">
              <a class="nav-link hobbieslink" href="#">
                register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="flex-container">
        <div>
          <div class="overlay-box">
            <h1 class="darkgreen"> Welcome to Driver's crash course! </h1>
            <p>
              {" "}
              Your number one stop to prevent a crash. Driver's crash course
              offers many resources to help you learn and excel your driving
              test! Choose from a diverse learning resources. Flashcards, Mock
              Exams, Practice Questions, and Videos are just a few of the things
              we offer!
            </p>
            <a
              href="https://www.youtube.com/watch?v=jMCM9vyq-tg"
              class="greenbutton"
              target="_blank"
            >
              {" "}
              <font size="3px" color="white">
                {" "}
                <b> Signup! </b>{" "}
              </font>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
