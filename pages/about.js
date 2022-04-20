import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.contentText}>
          <h1 className={styles.title}>About</h1>
          <h3 className={styles.altTitle}>Why did you make this?</h3>
          <p className={styles.aboutParas}>Great question.</p>
          <p className={styles.aboutParas}>
            This project was designed to solve a problem that I struggle with on
            a weekly basis: what to feed my family for the week. Between
            ever-changing schedules, lack of necessary ingredients, and
            fluctuating energy levels to be devoted to cooking, we have found
            ourselves ordering a lot of last minute DoorDash.
          </p>
          <p className={styles.aboutParas}>
            This "lazy" meal-planner app is intended to reduce some of the
            cognitive resources that are required for planning meals and grocery
            lists, so that the barriers to making food at home are lower. The
            recipes are designed to be simple, around 5-6 ingredients, and
            relatively low-effort.
          </p>
          <h3 className={styles.altTitle}>App features</h3>
          <p className={styles.aboutParas}>
            This project was designed with simplicity in mind. Users can
            view/choose from all recipes, or have 5 days of meals automatically
            planned for them. With the planned week of meals, users are able to
            view a compiled list of ingredients for the entire week. Users are
            also able to create and upload their own recipes to the database.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
