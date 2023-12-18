"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getProjectsCategoriesAndDocuments } from "@/utils/firebase.utils";
import { ProjectItem } from "./components/ProjectItem";
import styles from "./styles.module.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [categoriesMap, setCategoriesMap] = useState<any[]>([]);

  //   useEffect(() => {
  //     addProjectCollectionAndDocuments('projects', PROJECTS_START_DATA)
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getProjectsCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategories();
  }, []);

  const filteredProjects: any[] = categoriesMap
    .filter(
      (category) => activeFilter === "all" || category.title === activeFilter
    )
    .flatMap((category) =>
      category.items.filter((project: any) => project.published)
    )
    .flat();

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
            {categoriesMap.map((category: any) => (
              <div
                key={category.title}
                onClick={() => setActiveFilter(category.title)}
                className={`${styles.filter_item} ${
                  activeFilter === category.title ? styles.active : ""
                } `}
              >
                {category.title}
              </div>
            ))}
          </div>

          <div className={styles.projects}>
            {filteredProjects?.slice(0, visibleProjects).map((project: any) => (
              <ProjectItem project={project} />
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
