"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import aboutMeImage from "../../public/homeNav/about.jpeg";
import blogImage from "../../public/homeNav/blog.jpg";
import contactsImage from "../../public/homeNav/contacts.jpg";
import projectsImage from "../../public/homeNav/projects.jpg";

import styles from "./styles.module.scss";

const HomeNav = () => {
  const router = useRouter();
  const handlePage = (page: string) => router.push(`/${page}`);
  return (
    <nav className={styles.homeNav}>
      <div onClick={() => handlePage("about")}>
        <span>About</span>
        <Image src={aboutMeImage} alt="Halyna Harasymovych | About me" />
      </div>
      <div onClick={() => handlePage('projects')}>
        <span>Projects</span>
        <Image src={projectsImage} alt="Halyna Harasymovych | Projects" />
      </div>
      <div onClick={() => handlePage("blog")}>
        <span>Blog</span>
        <Image src={blogImage} alt="Halyna Harasymovych | Blog" />
      </div>
      <div onClick={() => handlePage("contacts")}>
        <span>Contact</span>
        <Image src={contactsImage} alt="Halyna Harasymovych | Contact" />
      </div>
    </nav>
  );
};

export default HomeNav;
