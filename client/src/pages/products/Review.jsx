import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getReviews,
} from "../../components/redux/action/productAction";

function ReviewsComponent(props) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const reviews = useSelector((state) => state.productStore.reviews);
  console.log("reviewww", reviews);

  console.log("review", props.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(props.id));
  }, [dispatch]);

  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-0">
        <div className="w-full md:w-2/3">
          <div className="flex justify-start items-start">
            {reviews.length >= 1 ? (
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white">
                Reviews
              </p>
            ) : (
              <></>
            )}
          </div>

          {reviews.map((review) => (
            <div
              key={review._id}
              className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 w-full"
            >
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= review.rating
                            ? "text-yellow-500 text-4xl"
                            : "text-gray-300 text-3xl"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.rating}
                  </h3>
                  <p className="my-4">{review.comment}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{reviews.comment}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {review.name}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3">
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <h1 className="text-lg font-bold">Your Review</h1>
            <textarea
              value={review}
              onChange={handleReviewChange}
              placeholder="Write your review..."
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:text-white"
            ></textarea>
            <div className="flex items-center mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= rating
                      ? "cursor-pointer text-yellow-500"
                      : "cursor-pointer text-gray-300"
                  }
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-3 px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500"
              onClick={() => dispatch(addReview(props.id, review, rating))}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}

export default ReviewsComponent;
