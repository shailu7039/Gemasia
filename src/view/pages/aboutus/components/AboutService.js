import React from "react";

export const AboutService = () => {
  return (
    <div className="lg:px-40 md:px-20 px-5 lg:py-8 md:py-10 py-8">
      <div data-aos="fade-up"
    //  data-aos-offset="300"
    data-aos-duration="3000">
        <h2 className="lg:text-2xl md:text-2xl text-2xl font-semibold  ">
          About Gemasia
        </h2>
        {/* <h4 className="">How Can We Help You?</h4> */}
        <p className="pt-3 lg:text-lg md:text-lg text-base  text-justify">
        Gemasia Antwerpen represents the culmination of Asian Star Company Limited’s legacy in the diamond industry. Since 1971, we have built a reputation of unwavering integrity, innovation, and superior craftsmanship. With a strong presence in Antwerp, Belgium, we are strategically positioned to serve clients across Europe, Asia, the Middle East, and beyond.
        </p>
        <p className="pt-2 lg:text-lg md:text-lg text-base text-justify">
        Our mission is to provide our clients with the finest diamonds, backed by unparalleled expertise and a commitment to ethical practices. We take pride in our:
        </p>
        <ul className="pl-12 pt-3" style={{ listStyleType: 'disc' }}>
          <li className="lg:text-lg md:text-lg text-base pb-1">Heritage: Decades of experience in diamond manufacturing and trading.</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Expertise: A team of skilled professionals dedicated to quality and precision.</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Global Reach: A robust network that ensures timely delivery and exceptional service.</li>
          <li className="lg:text-lg md:text-lg text-base pb-1">Sustainability: A commitment to ethical sourcing and responsible business practices.</li>
        </ul>
        <p className="pt-2 lg:text-lg md:text-lg text-base text-justify">
        At Gemasia Antwerp, we believe that every diamond tells a story. 
        </p>
        <p className="pt-2 lg:text-lg md:text-lg text-base text-justify">
        Let us help you find the perfect gem for your next masterpiece.
        </p>
      </div>
    </div>
  );
};
