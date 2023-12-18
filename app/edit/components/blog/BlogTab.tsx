import React, { Fragment, useState } from 'react'
import { Article } from '@/types';
import ArticlesList from './ArticlesList';
import ArticleForm from './ArticleForm';
import styles from './styles.module.scss';
import { getCategoriesAndDocuments } from '@/utils/firebase.utils';

export default function BlogTabContent() {
  const [postToUpdate, setPostToUpdate] = useState<Article | null>(null)
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    const categories = await getCategoriesAndDocuments();
    const allArticles = categories.flatMap((category) => category.items);

    setArticles(allArticles);
  };

  const handleEditPost = (data: Article) => setPostToUpdate(data); 
  const handleCancel = () => setPostToUpdate(null);

  return (
    <div className={styles.content_wrapper} >
      <ArticlesList handleEditPost={handleEditPost} handleGetArticles={getArticles} articles={articles} />
      <ArticleForm data={postToUpdate} handleGetArticles={getArticles} handleCancel={handleCancel}/>   
    </div>
  )
}
