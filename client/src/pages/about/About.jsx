import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarComp from '../../components/Navbar/Navbar';

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
    <NavbarComp />
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">

                <div className=' w-[40%] h-[50%]'>
                    <img src="/muscleshark/ms products_page-0011.jpg" alt="" />
                    <img src="/muscleshark/ms products_page-0011.jpg" alt="" />

                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="/muscleshark/creatine.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-amber-300">
                  Why Choose Us
                </span>
                <h2 className="mb-8 text-3xl font-bold text-amber-400 sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  {showFullText ? (
                    <>
                      Welcome to Muscle Sharks, your ultimate destination for top-quality fitness supplements in Ludhiana. We are proud to offer a wide range of supplements designed to support your fitness goals, whether you’re looking to build muscle, enhance performance, improve recovery, or manage weight. With our commitment to excellence and passion for fitness, we strive to provide you with the best products and service.
                      At Muscle Sharks, we understand that nutrition plays a vital role in achieving your fitness aspirations. That’s why we carefully curate our product selection, ensuring that each supplement meets the highest standards of quality and effectiveness. From whey protein to amino acids, mass gainers to fat burners, we have a comprehensive range of products to cater to your specific needs.
                      Our Whey Protein is sourced from premium whey protein isolate, delivering a concentrated dose of protein to support muscle growth and recovery. Indulge in the rich, creamy taste of our Peanut Butter, packed with essential nutrients and healthy fats. Experience the power of our Amino Acids, providing the building blocks your muscles need for optimal recovery and performance. If you’re looking to gain mass and size, our Mass Gainer is designed to provide the necessary calories, protein, and carbohydrates to fuel your gains. And for those seeking to enhance their fat loss journey, our Fat Burner is formulated to support metabolism and help you achieve a leaner physique.
                      We take pride in our commitment to quality. Our supplements are manufactured in state-of-the-art facilities, adhering to strict quality control standards. Each batch is tested to ensure purity, potency, and effectiveness. When you choose Muscle Sharks, you can have confidence in the products you’re using to fuel your fitness journey.
                      Located in Ludhiana, we serve as your local fitness supplement hub, providing you with the convenience of easy access to top-quality products. Our knowledgeable and friendly staff are here to assist you, offering expert advice and guidance to help you make informed choices that align with your fitness goals.
                      At Muscle Sharks, we believe in fostering a community of fitness enthusiasts who support and inspire one another. We are dedicated to helping you achieve your fitness aspirations and go above and beyond your expectations. We invite you to join our community, where passion for fitness and the pursuit of excellence unite.
                      Experience the Muscle Sharks difference and unlock your true potential. Visit our store in Ludhiana or explore our online platform to discover the finest fitness supplements that will elevate your fitness journey.
                    </>
                  ) : (
                    <>
                      Welcome to Muscle Sharks, your ultimate destination for top-quality fitness supplements in Ludhiana. We are proud to offer a wide range of supplements designed to support your fitness goals, whether you’re looking to build muscle, enhance performance, improve recovery, or manage weight. With our commitment to excellence and passion for fitness, we strive to provide you with the best products and service.{' '}
                      <span className="text-amber-600 cursor-pointer" onClick={toggleReadMore}>
                        Read More
                      </span>
                    </>
                  )}
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-amber-500 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About