import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        My passion lies in problem-solving and coding, and I consistently strive to deliver
        excellence in all my endeavors. Throughout my academic and professional journey, I've gained proficiency in a wide array of technologies.With experience in both mobile and web development, I aim to develop impactful applications that positively impact users' lives. Meticulous and driven, I bring a strong sense of responsibility to every project. I'm passionate about developing complex applications that address real-world challenges and positively impact millions of users.
      </p>
    );
    const two = (
      <p>
        Outside of work, I’m nerdy about tech gadgets, love literary fiction,
        and finding and marking art in everything.
      </p>
    );

    const tech_stack = [
      "Python",
      "Typescript",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {two}
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
