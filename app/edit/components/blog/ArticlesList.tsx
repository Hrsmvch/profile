import { Article } from "@/types";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { changePublishStatus, getCategoriesAndDocuments, removeArticleById } from "@/utils/firebase.utils";
import { default as EditIcon } from "@/public/icons/editText.svg";
import { default as HideIcon } from "@/public/icons/eyeOff.svg";
import { default as ShowIcon } from "@/public/icons/eyeOn.svg";
import { default as RemoveIcon } from "@/public/icons/remove.svg";

type Props = { 
  handleEditPost: (data: Article) => void;
  handleGetArticles:  () => void;
  articles: Article[];
};

export default function ArticlesList({ handleEditPost, handleGetArticles, articles }: Props) {
  
  const handleCLickEdit = (post: Article) => handleEditPost(post);
  const handleChangePublish = async (id: string) => {
    await changePublishStatus(id);
    handleGetArticles(); 
  }
  const handleRemovePost = async (id: string) => { 
    await removeArticleById(id)
    handleGetArticles();
  }

  useEffect(() => {
    handleGetArticles();
  }, [])

  if (!articles.length) return <div>No posts</div>;

  return (
    <div className={styles.posts}>
      <h2>All articles: {articles?.length}</h2>
      {articles?.map((post: Article) => { 
        const {title, summary, published, id, ...rest} = post;
        return (
          <div className={styles.post_item} key={id}>
          <div className={styles.post_info}>
            <h3 className={styles.post_title}>{title}</h3>
            <p className={styles.post_description}>{summary}</p>
          </div>
          <div className={styles.post_actions}>
            <div className={styles.action_item} onClick={() => handleCLickEdit(post)}><EditIcon /></div>
            <div className={styles.action_item} onClick={() => handleChangePublish(id)}>{published ? <HideIcon /> : <ShowIcon />}</div>
            <div className={styles.action_item} onClick={() => handleRemovePost(id)}><RemoveIcon /></div>
          </div>
        </div>
        )
      })}
    </div>
  );
}
