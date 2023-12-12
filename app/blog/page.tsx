'use client'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { default as ArrowUpIcon } from "../../public/arrow_up_right.svg";

const Blog = () => {

  const articles = ['', '', '', '', '']
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleArticles, setVisibleArticles] = useState(21);

  const filteredArticles =
    activeFilter === "all"
      ? articles
      : articles.filter((blog: any) => blog.tag == activeFilter);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 6);
  };

  return (
    <>
      <Header
        title={"Halyna Harasymovych"}
        subtitle={"Explore my articles"} 
      />
        <section className={styles.all_articles}>
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
              onClick={() => setActiveFilter("Web development")}
              className={`${styles.filter_item} ${
                activeFilter == "Web development" ? styles.active : ""
              } `}
            >
              Web development
            </div>
            <div
              onClick={() => setActiveFilter("Management")}
              className={`${styles.filter_item} ${
                activeFilter == "Management" ? styles.active : ""
              } `}
            >
              Management
            </div>
          </div>
          <div className={styles.articles}>
            {filteredArticles
              .slice(0, visibleArticles)
              .map((article: any, index) => (
                <>
                  <div
                    key={index}
                    className={`${styles.article_item}`} 
                  >
                    <div className={styles.title}>{'10 Ideas From the Best Book on Engineering Management'}</div>

                    <div className={styles.summary}>{'The basic architecture concepts which I believe every web='}</div>
                    <div className={styles.date}>{'3. December'}</div>
                    <a href={article.slug} className={styles.button}>
                      <ArrowUpIcon />
                    </a>
                  </div>
                </>
              ))}
          </div>
          {visibleArticles < filteredArticles.length && (
            <div className={styles.more}>
              <button onClick={handleLoadMore}>More</button>
            </div>
          )}
        </div>
      </section>
       <Footer />
    </>
  )
}

export default Blog