const OverviewProducts = () => {
    return (
      <div className="lg:p-3">
        <div className="flex flex-wrap justify-between">
          <ProductItem imgSrc="/muscleshark/ms products_page-0006.jpg" title="Mass Gainer" />
          <ProductItem imgSrc="/muscleshark/ms products_page-0008.jpg" title="Whey Protein" />
          <ProductItem imgSrc="/muscleshark/ms products_page-0009.jpg" title="Pre Workout" />
          <ProductItem imgSrc="/muscleshark/ms products_page-0011.jpg" title="Fat Loss" />
          <ProductItem imgSrc="/muscleshark/ms products_page-0013.jpg" title="Multivitamins" />
          <ProductItem imgSrc="/muscleshark/ms products_page-0014.jpg" title="Sports & Health" />
        </div>
      </div>
    );
  };
  
  const ProductItem = ({ imgSrc, title }) => {
    return (
      <div className="flex items-center lg:flex-nowrap  flex-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
        <img src={imgSrc} width={"80px"} alt={title} />
        <div className="ml-2">
          <a className="lg:text-lg lg:font-bold md:font-medium sm:text-sm max-sm:text-sm">{title}</a>
        </div>
      </div>
    );
  };
  
  export default OverviewProducts;
  