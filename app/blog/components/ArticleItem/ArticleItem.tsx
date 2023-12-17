import { Article } from "@/types";
import React from "react";
import styles from "../../styles.module.scss";
import getFormattedDate from "@/utils/getFormatedDate.utils";
import { default as ArrowUpIcon } from "@/public/arrow_up_right.svg";

type Props = { article: Article };

const ArticleItem = ({ article }: Props) => {
  return (
    <div key={article.id} className={styles.article_item}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.summary}>{article.summary}</div> 
      <div className={styles.date}>{getFormattedDate(article.date)}</div>
      <a href={`/blog/${article.slug}`} className={styles.button}>
        <ArrowUpIcon />
      </a>
    </div>
  );
};

export default ArticleItem;
