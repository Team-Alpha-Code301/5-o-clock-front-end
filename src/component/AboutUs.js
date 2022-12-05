import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Welcome.css';

class AboutUs extends React.Component {

  render() {

    return (
      <>
        <Header />
        <section>
          <h3>Gordon P. Reilley Jr</h3>
          <img src="https://avatars.githubusercontent.com/u/108242927?v=4" alt="Gordon" />
          <p>
            My Name is Gordon Patrick Reilley Jr. This quite possibly is the most  Irish name you will ever hear, but you might not even realize I am Irish by looking at me. This is because my Mother is Native American and I resemble her greatly. Strong genes I guess! I am married and have an 8 month old baby boy and yes he is the III (third). I am currently living in Maryland learning to code at Code Fellows in order to land a job in the tech industry. I am a former Naval Aircrewman for the United States Navy and after 7 years of service I can say I had a great time but I am looking forward to my next step in becoming a software engineer. I love the outdoors as much as I love being at the computer, the challenge is balancing the two! With all that being said, I hope you learned a thing or two about me and enjoy the our website.
          </p>
        </section>

        <section>
          <h3>Dylan Cabral</h3>
          <img src="https://avatars.githubusercontent.com/u/113924687?v=4" alt="Dylan" />
          <p>
            Hello, My name is Dylan and I am a software developer, I have a background in aerospace production and sales, I have always been a problem solver, and when I learned that at every level of software development you are solving problems, and working in teams to make things smooth I knew it was for me.
            I decided to learn full stack software development so that I could be hands on in whatever step of the process I needed to be to ensure my team feels supported, I hope to use these skills to improve processes and morale within a team of hard working people.
            I think sales and working in production for so long gives me a high level of retention towards a positive attitude and my people skills really shine in every environment I put myself in.
          </p>
        </section>

        <section>
          <h3>Ian F. Shirley</h3>
          <img src="https://avatars.githubusercontent.com/u/107962287?v=4" alt="Ian" />
          <p>
            Hey! I’m Ian F. Shirley, a software developer with a background in sales, customer service & fraud investigation; my main languages are JavaScript & Python. As someone who not only loves building and fixing things, but also someone who is obsessed with finding answers to the questions “how” and “why”, being a software developer is a perfect fit for me. I’m very analytical, and motivated to find solutions to the problems I encounter, and I disagree with the phrase “if it ain’t broke, don’t try to fix it”, because I think there’s usually a way to improve on something even if it’s already working. In short, I like to find ways to maximize efficiency. All of these things make this a rewarding career for me; and on top of that, I hope that someday I can use those skills and attributes at a company that makes positive contributions to issues that I care about, such as homelessness or environmental sustainability.
          </p>
        </section>

        <section>
          <h3>Brenda Jow</h3>
          <img src="https://avatars.githubusercontent.com/u/107290326?v=4" alt="Brenda" />
          <p>
            My name is Brenda and I am a software developer with an early childhood education background. I had been working as a preschool lead teacher for years and later on decided to switch my career path to software development. I really enjoy solving problems and I am always interested in tech since I was a kid. I started teaching myself coding with Java a couple of months ago and I am recently learning JS because I want to be able to build a website myself as a professional full-stack developer. I hope one day I can use my technical and problem-solving skills to make positive contributions to my community, to help educate children, or to make contributions to open sources.
          </p>
        </section>

        <section>
          <h3>Don Choi</h3>
          <img src="https://avatars.githubusercontent.com/u/113468027?v=4" alt="Don" />
          <p>
            My name is Don Choi and I am a software developer and currently serving in Army as a Reservist, too. I am a person who is dedicated to solve a problem that is given to me, but at the same time, I am also a person who knows when to put my hands off and find a chance to come back to solve the problem, and it naturally made me able to spend time effectively.
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

export default AboutUs;
