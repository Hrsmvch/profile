"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getCookie from "@/utils/getCookieValue";
import styles from "./styles.module.scss";
import Header from "@/components/header/header";
import BlogTabContent from "./components/blog/BlogTab";
import ProfileTabContent from "./components/profile/profileTab";
import ProjectsTabContent from "./components/projects/projectsTab";

const TAB_TITLES = ["Profile", "Blog", "Projects"];


const Edit = () => {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);

  useEffect(() => {
    const adminKey = getCookie("adminKey");

    if (!adminKey || adminKey !== process.env.NEXT_PUBLIC_ADMIN_KEY) {
      router.push("/hv-admin");
    }
  }, [router]);

  return (
    <div className={styles.page_wrapper}>
      <Header title={"Halyna Harasymovych"} subtitle={"Update profile"} />
      <div className={styles.pages_tab}>
        <div className={styles.tab_titles}>
          {TAB_TITLES.map((title, index) => (
            <a
              key={index}
              className={`${styles.title_item} ${
                openTab === index + 1 ? styles.active : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(index + 1);
              }}
            >
              {title}
            </a>
          ))}
        </div>

        <div className={styles.tabs_content}>
          {[ProfileTabContent, BlogTabContent, ProjectsTabContent].map(
            (TabComponent, index) => (
              <div
                key={index}
                className={openTab === index + 1 ? styles.block : styles.hidden}
              >
                <TabComponent />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
