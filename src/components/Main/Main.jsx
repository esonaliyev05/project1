import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_text">
          <h1>Projects</h1>

<a href="#concat">

          <button>CONTACT ME</button>
</a>
        </div>
        <div className="tap_container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap.png" alt="DESIGN PORTFOLIO" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>DESIGN PORTFOLIO</h3>
                <p>HTML | CSS</p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap (1).png" alt="E-COMMERCE WEBSITE" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>E-COMMERCE WEBSITE</h3>
                <p>React | SCSS</p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap (2).png" alt="WEB APP" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>WEB APP</h3>
                <p>Vue | Tailwind</p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap (3).png" alt="MOBILE DESIGN" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>MOBILE DESIGN</h3>
                <p>React Native | Expo</p>
              </div>
            </div>

            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap (4).png" alt="LANDING PAGE" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>LANDING PAGE</h3>
                <p>HTML | CSS | JS</p>
              </div>
            </div>
            <div className="project-card">
              <div className="image-overlay">
                <img src="Bitmap (5).png" alt="LANDING PAGE" />
                <div className="overlay-content">
                  <button className="view-btn">VIEW PROJECT</button>
                  <button className="code-btn">VIEW CODE</button>
                </div>
              </div>
              <div className="project-info always-visible">
                <h3>LANDING PAGE</h3>
                <p>HTML | CSS | JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
