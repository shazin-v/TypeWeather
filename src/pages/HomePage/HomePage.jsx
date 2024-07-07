import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export const HomePage = () => {

const navigate = useNavigate();

const handleNavigate = () =>{
    navigate("/weather")
}

  return (
    <>
      <div className={styles.Main_container}>
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="../src/images/logo.png"
            alt="logo"
          />
          <h1 className={styles.Heading}>TypeWeather</h1>
        </div>
        <div className={styles.weather_container}>
          <h1 className={styles.welcome}> welcome to TypeWeather</h1>
          <p className={styles.description}>
            Choose a location to see the weather forecast
          </p>
          <div className={styles.form_control}>
            <div className={styles.input_container}>
              <input
                className={`${styles.input} ${styles.inputAlt}`}
                placeholder="Search Location"
                required=""
                type="text"
              />
              <ClipLoader color="#8FB2F5" size={30} className={styles.loader} />
            </div>
          </div>
        <button onClick={handleNavigate}>next page</button>
          
        </div>
      </div>
    </>
  );
};

export default HomePage;
