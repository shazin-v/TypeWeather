import styles from "./Weather.module.css";

export const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo_container}>
          <img
            src="../src/images/logo.png"
            alt="logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.form_control}>
          <div className={styles.input_container}>
            <input
              className={`${styles.input} ${styles.inputAlt}`}
              placeholder="Search Location"
              required=""
              type="text"
            />
          </div>
        </div>
      </div>

      <div className={styles.weather_container}>
        <div className={styles.abc}>
          <h1>first row</h1>
          <div className={styles.location}>
            <h1 className={styles.locations}>Kannur, Kerala</h1>
            <h2 className={styles.temp}>12:34 pm</h2>
          </div>
          <div className={styles.date}>
            <h3>Monday, May 21, 2024</h3>
            <h5>28ºc</h5>
          </div>

          <div>
            <h5>32ºc / 26ºc </h5>
            <h5>Few clouds</h5>
          </div>
        </div>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Weather;
