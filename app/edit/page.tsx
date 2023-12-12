"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getCookie from "@/utils/getCookieValue";
import styles from "./styles.module.scss";
import Header from "@/components/header/header";

const Edit = () => {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);

  // const { currentUser, setCurrentUser } = useContext(UserContext);
  // const handleSignOut = async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);
  //   router.push('/hv-admin')
  // }

  useEffect(() => {
    if (getCookie("adminKey") != process.env.NEXT_PUBLIC_ADMIN_KEY) {
      router.push("/hv-admin");
    }
  }, []);

  return (
    <div className={styles.page_wrapper}>
      <Header title={"Halyna Harasymovych"} subtitle={"Update profile"} />
      <div className={styles.pages_tab}>
        <div className={styles.tab_titles}>
          <a
            className={`${styles.title_item} ${
              openTab === 1 ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            Profile
          </a>
          <a
            className={`${styles.title_item} ${
              openTab === 2 ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            Blog
          </a>
          <a
            className={`${styles.title_item} ${
              openTab === 3 ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            Projects
          </a>
        </div>

        <div className={styles.tabs_content}>
          <div className={openTab === 1 ? styles.block : styles.hidden}>
            <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Summery</h3>
              </div>
              <div className={styles.items}>
                <textarea name="summery"></textarea>

                <div className={styles.label}>Image</div>
                <input type="file" />

                <div className={styles.label}>CV</div>
                <input type="file" />
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Work experience</h3>
              </div>
              <div className={styles.items}>
                <button>Add new</button>

                <div className={styles.work_exp}>
                  <div className={styles.index}>1 | </div>
                  <input type="text" placeholder="23. June 2020 - present" />
                  <input type="text" placeholder="Front-end developer" />
                  <input type="text" placeholder="Company inc." />
                  <input type="text" placeholder="Description" />
                </div>
                <div className={styles.work_exp}>
                  <div className={styles.index}>2 | </div>
                  <input
                    type="text"
                    value={"23. June 2020 - 14 January 2024"}
                    placeholder="23. June 2020 - present"
                  />
                  <input
                    type="text"
                    value={"Front-end developer"}
                    placeholder="Front-end developer"
                  />
                  <input type="text" value={"Tallium Inc."} placeholder="" />
                  <input type="text" placeholder="Description" />
                </div>
                <div className={styles.work_exp}>
                  <div className={styles.index}>3 | </div>
                  <input
                    type="text"
                    value={"13. June 2020 - 10 January 2024"}
                    placeholder="23. June 2020 - present"
                  />
                  <input
                    type="text"
                    value={"Back-end developer"}
                    placeholder="Front-end developer"
                  />
                  <input type="text" value={"Sphere.TO"} placeholder="" />
                  <input type="text" placeholder="Description" />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.heading}>
                <h3>Courses</h3>
              </div>
              <div className={styles.items}>
                <div className={styles.course_item}>
                  <div className={styles.index}>1 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>

                <div className={styles.course_item}>
                  <div className={styles.index}>2 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>

                <div className={styles.course_item}>
                  <div className={styles.index}>3 | </div>
                  <input type="text" placeholder="Course name" />
                  <input type="text" placeholder="Small description" />
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
          <div className={openTab === 2 ? styles.block : styles.hidden}>
            <p>
              2Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br /> Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div className={openTab === 3 ? styles.block : styles.hidden}>
            <p>
              3Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br /> Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
        </div>

        <button>Save</button>
      </div>
    </div>
  );
};

export default Edit;
