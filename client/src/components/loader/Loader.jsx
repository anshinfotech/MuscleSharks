import "./loader.css";
const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // This makes the container take up the full height of the viewport
        }}
      >
        <div className="loading-bar">Loading</div>
      </div>
    </>
  );
};

export default Loader;
