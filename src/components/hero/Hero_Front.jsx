import React from "react";

const Hero_Front = () => {
  return (
    <div className="hero-front-container">
      <div className="hero-front-wrapper">

        {/* LEFT PACK */}
        <img
          className="left-pack"
          src="https://www.wimpdecaf.com/cdn/shop/files/kahlo-7_07928c86-00eb-45dd-82e0-96b299b60048_1920x1920@2x.png?v=1738011035"
          alt="Left Coffee Pack"
        />

        {/* RIGHT PACK */}
        <img
          className="right-pack"
          src="https://www.wimpdecaf.com/cdn/shop/files/01-05-Bekele_00_1920x1920@2x.png?v=1767624107"
          alt="Right Coffee Pack"
        />

        {/* CENTER PACK */}
        <img
          className="center-pack"
          src="https://www.wimpdecaf.com/cdn/shop/files/coltrane-7_0eea5d32-e260-44bf-a8e8-578d17d30eca_2560x.png?v=1738010992"
          alt="Center Coffee Pack"
        />

      </div>
    </div>
  );
};

export default Hero_Front;