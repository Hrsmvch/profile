import Header from "@/components/header/header";
import styles from "./home.module.scss";
import Footer from "@/components/footer/footer";
import HomeNav from "@/components/homeNav/homeNav";
import coverImage from "../public/bg.jpg";
import coverImage2 from "../public/home_2.png";
import Image from "next/image";
import ProjectsPreview from "@/components/projectsPreview/projectsPreview";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header
        title={"Halyna Harasymovych"}
        subtitle={"Creative Developer & Designer"}
        isHome={true}
      />
      <HomeNav />
      <section className={styles.homeSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textHeader}>{`Hi there!`}</div>
              <div className={styles.textDescription}>
                {`I'm a software developer and designer, passionate about crafting
                seamless digital experiences. Let's create something amazing
                together!`}
                <br />
                <br />
                {`Explore my work and get in touch. Excited to
                collaborate with you!`}
              </div>
            </div>
            <div className={styles.images}>
              <Image
                className={styles.largeImage}
                src={coverImage}
                alt="Halyna Harasymovych - Software Developer and Designer"
              />
              <Image
                className={styles.smallImage}
                src={coverImage2}
                alt="Halyna Harasymovych - Software Developer and Designer"
              />
            </div>
          </div>
        </div>
      </section>
      <ProjectsPreview />
      <Footer />
    </main>
  );
}
