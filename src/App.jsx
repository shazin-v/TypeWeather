import "./App.css";

function App() {
  return (
    <>
      <div className="Main-container">
        <div className="logo-container">
          <img className="logo" src="../src/images/logo.png" alt="logo" />
          <h1 className="Heading">TypeWeather</h1>
        </div>
        <div className="weather-container">
          <h1 className="welcome">Welcome to TypeWeather</h1>
          <p className="description">
            Choose a location to see the weather forecast
          </p>
          <div className="form-control">
            <input
              className="input input-alt"
              placeholder="Search Location"
              required=""
              type="text"
            />
            {/* <span className="input-border input-border-alt"></span> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
