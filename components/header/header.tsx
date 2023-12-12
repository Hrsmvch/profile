import React from "react";
import Navigation from "../navigation/navigation";
import styles from "./styles.module.scss";

interface propsData {
  title: string;
  subtitle: string;
  isHome?: boolean;
}

export default function Header({ title, subtitle, isHome }: propsData) {
  return (
    <>
      <Navigation />
      <section className={`${styles.section} ${isHome ? styles.home : ""}`}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.headerSubtitle}>{subtitle}</div>
          </div>
        </div>
      </section>
    </>
  );
}
