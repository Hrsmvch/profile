import { default as InstagramIcon } from "@/public/socials/instagram.svg";
import { default as GitHubIcon } from "@/public/socials/github.svg";
import { default as LinkenInIcon } from "@/public/socials/linkedin.svg";

import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a target="blank" href="https://www.linkedin.com/in/hv-harasymovych/">
        <LinkenInIcon />
      </a>
      <a target="blank" href="https://github.com/hrsmvch">
        <GitHubIcon />
      </a>
      <a target="blank" href="https://www.instagram.com/harasymovych.hv/">
        <InstagramIcon />
      </a>
    </div>
  );
}
