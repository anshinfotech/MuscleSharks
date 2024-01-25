import './overview.css'
const OverviewProducts = () => {
  return (
    <div className="lg:p-3">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0006.jpg"
            // width={"80px"}
            alt=""
            className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className="txt">
            Mass Gainer
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0008.jpg"
            // width={"80px"}
            alt=""
           className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className=" txt">
            Whey Protein
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0009.jpg"
            // width={"80px"}
            alt=""
           className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className="txt">
            Pre Workout
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0011.jpg"
            // width={"80px"}
            alt=""
           className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className="txt">
            Fat Loss
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0013.jpg"
            // width={"80px"}
            alt=""
           className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className="txt">
            Multivitamins
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/muscleshark/ms products_page-0014.jpg"
            // width={"80px"}
            alt="img"
           className="md:w-28 lg:w-52 sm:w-20 max-sm:w-14"
          />

          <p className="txt">
            Sports & Health
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewProducts;
