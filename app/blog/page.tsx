"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "@/utils/firebase.utils";
import styles from "./styles.module.scss";
import { BlogProps, BlogCategory, Article } from "@/types";
import BLOG_START_DATA from '../../blog-test-data'
import getFormattedDate from "@/utils/getFormatedDate.utils";
import ArticleItem from "./components/ArticleItem/ArticleItem";

const Blog: React.FC<BlogProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleArticles, setVisibleArticles] = useState<number>(12);
  const [categoriesMap, setCategoriesMap] = useState<BlogCategory[]>([]);

  //   useEffect(() => {
  //   addCollectionAndDocuments('blog', BLOG_START_DATA)
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategories();
  }, []);

  const filteredArticles: Article[] = categoriesMap
    .filter(
      (category) =>
        activeFilter === "all" || category.title === activeFilter
    )
    .map((category) => category.items)
    .flat();

  const hasMoreArticles: boolean = visibleArticles < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 6);
  };

  const handleChangeCategory = (category: string) => {
    setActiveFilter(category);
    setVisibleArticles(12);
  };
 

  return (
    <>
      <Header title={"Halyna Harasymovych"} subtitle={"Explore my articles"} />
      <section className={styles.all_articles}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div
              onClick={() => handleChangeCategory("all")}
              className={`${styles.filter_item} ${
                activeFilter === "all" ? styles.active : ""
              } `}
            >
              All
            </div> 
            {categoriesMap.map((category: any) => (
              <div
                key={category.title}
                onClick={() => handleChangeCategory(category.title)}
                className={`${styles.filter_item} ${
                  activeFilter === category.title ? styles.active : ""
                } `}
              >
                {category.title}
              </div>
            ))}
          </div>
          <div className={styles.articles}>
            {filteredArticles
              ?.slice(0, visibleArticles)
              ?.map((article: Article) => (
               <ArticleItem article={article} />
              ))}
          </div> 
          {hasMoreArticles && (
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

export default Blog;
