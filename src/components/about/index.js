import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! I'm Steven Schrimmer, a 34-year-old residing in The Woodlands of Houston, TX. I studied International Business in college and my minor was physcology, while in college I was offered an opportunity to work for a world renowned private equity firm and from there established a career in finance.
          </p>
          <p>After 10 years of working with private equity firms, venture capital firms and hedge funds it has taken it's toll while I still have an extreme passion for the financial industry I have decided to pursue another passion of mine which is technology/design. 
          With my knowledge of the financial industry I know there is a massive shift taking place and fintech companies need a fresh set of eyes and skills involved to make their future work which is why I have decided to puruse software engineering.</p>
        </div>
      </div>
    </section>
  );
}

export default About;