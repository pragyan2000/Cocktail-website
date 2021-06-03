import React from "react";

const About = () => {
  return (
    <section className="section about-section ">
      <h1 className="section-title">about us</h1>
      <p>
        This website shows the Certain of Cocktails based on your search terms
        it might not show anything when it didnt meet the criteria of your
        searchTerm.It uses the CockTailsDb for the API services. Feel free to
        use source-code for your personal use you can find it on my github
        <br />
        <a>https://github.com/pragyan2000/Cocktail-website</a>
        <br />
        <span className="drinks-data">Made with 💓 by Pragyan Yaduvanshi</span>
      </p>
    </section>
  );
};

export default About;
