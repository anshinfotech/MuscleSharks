import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffers } from "../../components/redux/action/adminAction";

function Offers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  const offer = useSelector((state) => state.adminDetails.offers);
  console.log("Offer", offer);

  return (
    <>
      {offer && offer.length > 0 ? (
        <>
          <div className="h-56 sm:h-64 xl:h-[50rem] 2xl:h-[50rem] flex justify-center items-center">
            <Carousel slideInterval={3000}>
              {offer.map((e) => {
                return (
                  <div key={e._id}>
                    <img src={e.offerImg ? e.offerImg : null} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Offers;
