"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MenuDots from "../menuDots/menuDots";
import navLinks from "@/data/navLinks";
import styles from "./styles.module.scss";

const Navigation = () => {
  const router = useRouter();
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <>
      <MenuDots openedMenu={openedMenu} handleMenuOpen={setOpenedMenu} />
      {openedMenu ? (
        <div className={styles.menu_navigation}>
          <div className={styles.heading}>
            <div className={styles.name}>Harasymovych</div>
          </div>
          <ul className={styles.links}>
            {navLinks?.map((link) => (
              <li onClick={() => router.push(`${link.path}`)}>{link.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
