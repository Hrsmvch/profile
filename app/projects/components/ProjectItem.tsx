import React from 'react'
import getFormattedDate from '@/utils/getFormatedDate.utils';
import { default as ArrowIcon } from "../../../public/arrow.svg";
import styles from "../styles.module.scss";

type Props = { project: any };

export const ProjectItem = ({ project }: Props) => {
  const {name, summary, date, ...data} = project;
  return (
    <div className={styles.project_item}>
    <div className={styles.image}>
      <img src={'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt="Cue.inc" />
    </div>
    <div className={styles.info}>
      <div className={styles.heading}>
        <div className={styles.date}>{getFormattedDate(date)}</div>
        <div className={styles.title}>{name}</div>
      </div>
      <div className={styles.summary}>{summary}</div>
      <a href={`/projects/${project.slug}`} className={styles.button}>
        <ArrowIcon />
      </a>
    </div>
  </div>
  )
}
