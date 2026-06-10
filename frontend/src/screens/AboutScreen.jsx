const AboutScreen = () => {
  return (
    <section className='about-page'>
      <div className='about-container'>
        <h1>About AirVista</h1>

        <p className='about-intro'>
          AirVista provides safe, comfortable, and reliable travel to the most
          popular destinations around the world. With a modern fleet of
          aircraft and a professional team, our goal is to ensure a pleasant
          experience for every passenger, from the moment of booking to arrival
          at the desired destination.
        </p>

        <div className='about-block'>
          <h2>◎ Our Mission</h2>

          <p>
            Our mission is to provide high-quality and affordable travel for
            all passengers, while maintaining a high level of service and
            safety. We strive to make every journey simple, fast, and
            stress-free.
          </p>
        </div>

        <div className='about-block'>
          <h2>◉ Our Vision</h2>

          <p>
            Our vision is to become one of the leading airlines in the region,
            recognized for reliability, innovation, and customer satisfaction.
          </p>
        </div>

        <div className='about-block'>
          <h2>↺ Company History</h2>

          <p>
            The company was founded with the goal of connecting people and
            destinations in a simple and efficient way. Over the years, we have
            expanded our flight network, improved our services, and built trust
            among our passengers. Today, we proudly serve thousands of
            satisfied customers every day.
          </p>
        </div>

        <div className='why-box'>
          <h2>Why Choose Us?</h2>

          <div className='why-grid'>
            <div>
              <p>✔ Safety and reliability come first</p>
              <p>✔ Easy online booking</p>
              <p>✔ 24/7 customer support</p>
            </div>

            <div>
              <p>✔ Competitive prices and special offers</p>
              <p>✔ Professional and friendly staff</p>
              <p>✔ Comfortable and modern aircraft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutScreen