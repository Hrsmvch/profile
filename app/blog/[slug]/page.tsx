"use client";
import { Article, BlogCategory } from "@/types";
import {
  getArticleBySlug,
  getCategoriesAndDocuments,
} from "@/utils/firebase.utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import getFormattedDate from "@/utils/getFormatedDate.utils";
import getShuffleArray from "@/utils/getShuffleArray";
import { default as ArrowUpIcon } from "@/public/arrow_up_right.svg";
import Footer from "@/components/footer/footer";

type ArticleData = Article | null;

export async function generateStaticParams() {
  const categories = await getCategoriesAndDocuments();
  const allArticles = categories.flatMap((category) => category.items);

  // Generate an array of paths based on the available article slugs
  const paths = allArticles.map((article) => ({ params: { slug: article.slug } }));

  return paths;
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  // Fetch the article data based on the dynamic slug parameter
  const article = await getArticleBySlug(slug);

  return {
    props: {
      article,
    },
  };
}


const page = () => {
  const { slug } = useParams(); 
  const [article, setArticle] = useState<ArticleData>(null);

  const [allArticles, setAllArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticleData = async () => {
      const response: ArticleData = await getArticleBySlug(`${slug}`);
      setArticle(response);
    };

    const getArticles = async () => {
      const response = await getCategoriesAndDocuments();
      setAllArticles(response?.flatMap((category) => category.items));
    };

    getArticleData();
    getArticles();
  }, [slug]);

  const shuffledArticles = getShuffleArray(allArticles || []);

  if (!article) return;

  return (
    <>
      <header className={styles.blog_header}>
        <a href="/" className={styles.logo}>
          HARASYMOVYCH
        </a>
        <div className={styles.container}>
          <div className={styles.upper_text}>The blog</div>
          <div className={styles.title}>{article?.title}</div>
          <div className={styles.date}>{getFormattedDate(article.date)}</div>
        </div>
      </header>
      <section className={styles.article_content}>
        <div className={styles.container}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </div>
      </section>
      <section className={styles.more_articles}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Explore more articles</h2>
            <a href="/blog">See all</a>
          </div> 
          {shuffledArticles?.length ? (
            <div className={styles.additional_articles}>
              {shuffledArticles?.slice(0, 3).map((article, index) => (
                <>
                  <div key={index} className={`${styles.article_item}`}>
                    <div className={styles.title}>{article.title}</div>

                    <div className={styles.summary}>{article.summary}</div>
                    <div className={styles.date}>
                      {getFormattedDate(article.date)}
                    </div>
                    <a href={`/blog/${article.slug}`} className={styles.button}>
                      <ArrowUpIcon />
                    </a>
                  </div>
                </>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
