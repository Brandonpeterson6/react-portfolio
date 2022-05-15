import React from 'react';
import profPic from "../../assets/profile-pic.JPG";

function About() {
    return (
      <section className= "my-5">
        <div className="color-block">
          <div id ="profpic">
            <img id="main" src={profPic} className="my-2" alt="profile" />
          </div>
          <h1 id="about">About Me</h1>
        </div>
        <div className="my-2">
          <p>
          My name is Brandon Peterson, I am 22 years old and currently work as an Ashpalt Quality Control Technician for Staker Parson. I have worked there for 4 years now.
          I took this coding bootcamp to learn a new skill and possilbly start a career with it.
          </p>     
        </div>
      </section>
    );
  }
  
  export default About;