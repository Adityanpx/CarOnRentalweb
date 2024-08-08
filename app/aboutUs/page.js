import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
      <div className="max-w-5xl text-center mt-10">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-xl mb-6">
          Welcome to Pune's premier car rental service, where convenience meets excellence. We pride ourselves on offering an unparalleled selection of vehicles tailored to your needs, ensuring that every journey is comfortable, safe, and memorable.
        </p>
        <p className="text-xl mb-6">
          Our mission is to transform the car rental experience by delivering top-notch customer service and a diverse fleet of vehicles. Whether you're exploring Pune, planning a weekend getaway, or need a reliable vehicle for business purposes, we've got you covered.
        </p>
        <p className="text-xl mb-6">
          We believe in transparency and trust, which is why every vehicle in our fleet is meticulously maintained and comes with complete details, including mileage, features, and rental rates. Our easy-to-use platform allows you to compare, choose, and book the perfect car in just a few clicks.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/car-rental-1.jpg"
            alt="Premium Car Rental"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/car-rental-2.jpg"
            alt="SUV for Rent"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl text-center mt-16">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="text-lg list-disc list-inside mb-6">
          <li className="mb-2">Wide range of vehicles including sedans, SUVs, and luxury cars.</li>
          <li className="mb-2">Affordable pricing with no hidden fees.</li>
          <li className="mb-2">24/7 customer support to assist you whenever you need.</li>
          <li className="mb-2">Flexible rental options: hourly, daily, weekly, or monthly.</li>
          <li className="mb-2">Convenient pick-up and drop-off locations across Pune.</li>
        </ul>
        <p className="text-xl">
          At the heart of our service is our commitment to your satisfaction. We strive to exceed your expectations with every rental, making your journey with us a delightful experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/customer-support.jpg"
            alt="Customer Support"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/luxury-car.jpg"
            alt="Luxury Car Rental"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl text-center mt-16 mb-16">
        <h2 className="text-4xl font-bold mb-6">Join Us on the Road Ahead</h2>
        <p className="text-xl mb-6">
          Whether you're a resident or a visitor, we invite you to experience the freedom of exploring Pune and beyond with our top-tier car rental service. Discover the difference that quality, reliability, and customer-centric service can make on your journey.
        </p>
        <p className="text-xl">
          Ready to hit the road? Book your next ride with us today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
