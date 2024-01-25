const TestReview = () => {
  return (
    <div className="container my-12 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Client Testimonials</h2>

        <div className="grid gap-x-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {/* Testimonial 1 */}
          <div className="mb-4 p-2">
            {/* ... (rest of the code remains the same) */}
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                  className="w-full rounded-t-lg"
                  alt="avatar"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Charu Passi</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Teacher
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  Unmatched quality and exceptional service! This gym supplement
                  store has become my fitness sanctuary. From cutting-edge
                  supplements to expert advice, every visit leaves me inspired.
                  The personalized approach to wellness sets them apart. Trust
                  me; it{"'"}s not just a store; it{"'"}s a fitness journey
                  companion!
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="mb-4 p-2">
            {/* ... (rest of the code remains the same) */}
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                  className="w-full rounded-t-lg"
                  alt="avatar"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Anshika</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  An Athelete
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  Exceptional supplements, unparalleled results! I{"'"}ve tried
                  many, but the gym supplements store stands out. Top-quality
                  products, expert advice, and incredible results. A must-visit
                  for serious fitness enthusiasts. Thank you for elevating my
                  fitness journey!
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="mb-4 p-2">
            {/* ... (rest of the code remains the same) */}
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                  className="w-full rounded-t-lg"
                  alt="avatar"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Aman Dubey</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Sports Men
                </h6>
                <ul className="mb-6 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
                <p>
                  Transformative experience! This gym supplement store exceeded
                  my expectations. Their knowledgeable staff, premium products,
                  and personalized guidance have been pivotal in achieving my
                  fitness goals. A go-to destination for anyone committed to a
                  healthier, stronger lifestyle. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestReview;
