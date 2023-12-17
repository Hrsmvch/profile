'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const ArticleContent = () => {
  const { slug } = useParams(); 
  console.log('slug: ', slug);
  return (
    <div>ArticleContent</div>
  )
}

export default ArticleContent