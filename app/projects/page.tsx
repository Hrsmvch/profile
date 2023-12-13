"use client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./styles.module.scss";
import { useState } from "react";
import { default as ArrowIcon } from "../../public/arrow.svg";


const Projects = () => {
  const projects = [{}, {}, {}, {}, {}];
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project: any) => project?.tag == activeFilter);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  }; 

  return (
    <>
      <Header title={"Halyna Harasymovych"} subtitle={"Explore my projects."} />
      <section className={styles.all_projects}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div
              onClick={() => setActiveFilter("all")}
              className={`${styles.filter_item} ${
                activeFilter == "all" ? styles.active : ""
              } `}
            >
              All
            </div>
            <div
              onClick={() => setActiveFilter("Design")}
              className={`${styles.filter_item} ${
                activeFilter == "Design" ? styles.active : ""
              } `}
            >
              Design
            </div>
            <div
              onClick={() => setActiveFilter("Frontend")}
              className={`${styles.filter_item} ${
                activeFilter == "Frontend" ? styles.active : ""
              } `}
            >
              Frontend
            </div>
          </div>

          <div className={styles.projects}>
            {filteredProjects.slice(0, visibleProjects).map((project: any) => (
              <>
                <div className={styles.project_item}>
                  <div className={styles.image}>
                    <img src={'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt="Cue.inc" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.heading}>
                      <div className={styles.date}>{'13. July 2023'}</div>
                      <div className={styles.title}>{'Cue. inc'}</div>
                    </div>
                    <div className={styles.summary}>{'"Cue" is an all-in-one self-management app that empowers users to efficiently organize and optimize various aspects of their lives, including finance management, calendar scheduling, note-taking, and more. With its seamless integration and user-friendly interface, Cue becomes the ultimate tool to help individuals achieve personal and financial goals.'}</div>
                    <a href={project.slug} className={styles.button}>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>
            {visibleProjects < filteredProjects.length && (
              <div className={styles.more}>
                <button onClick={handleLoadMore}>More</button>
              </div>
            )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
