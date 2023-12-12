import React from 'react'
import styles from "./styles.module.scss";
import coverImage from "../../public/coverBook.jpg";
import Image from 'next/image';

const Cover = () => {
  return (
    <div className={styles.cover}>
      <Image src={coverImage} alt="" />
    </div>
  )
}

export default Cover