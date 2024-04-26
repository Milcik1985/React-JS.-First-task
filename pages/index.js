import styles from "../styles/Home.module.css";

const Main = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.h1}>Bailard Foundation</h1>
        <div className={styles.headerWrapper}>
          <h2 className={styles.h2}>Sustainability</h2>
          <h3 className={styles.h3}>Starts With You</h3>
          <button className={styles.button}>Learn More</button>
        </div>

      </header>

      <main className={styles.divContainer}>
        <div className={styles.textContainer}>
          <h4 className={styles.h4}>We conserve land through outreach and restoration</h4>
          <p className={styles.p}>
            Some of the Earth's greatest landscapes are threatened by increased road cinstruction, oil and gas exploration, and mining. We aim protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Main;