'use client'
import React from 'react'
import styles from './styles.module.scss'
import { default as ArrowIcon } from "@/public/arrow.svg";
import { useRouter } from 'next/navigation';

const ProjectsPreview = () => {
  const router = useRouter();

  const handleMoreProject = () => router.push('/projects');
  const handleDetailProject = (slug: string) => router.push(`/projects/${slug}`);

  return (
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.title}>Explore my projects.</div>
            <div className={styles.more} onClick={handleMoreProject}>Explore more</div>
          </div>
          <div className={styles.content}>
            {['', '', '']?.slice(0, 3)?.map((project, index) => (
              <>
                <div className={styles.project_item}>
                  <div className={styles.info}>
                    <div className={styles.date}>{`23. June 2023`}</div>
                    <div className={styles.project_title}>{`Cue. inc`}</div>
                  </div>
                  <div className={styles.summery}>
                    {`"Cue" is an all-in-one self-management app that empowers users to efficiently organize and optimize various aspects of their lives, including finance management, calendar scheduling, note-taking, and more. With its seamless integration and user-friendly interface, Cue becomes the ultimate tool to help individuals achieve personal and financial goals.`}
                  </div>
                  <div  className={styles.detail_btn} onClick={() => handleDetailProject(`${index}`)}>
                    <ArrowIcon />
                  </div>
                </div>
              </>
            ))} 
          </div>
        </div>
      </section>
  )
}

export default ProjectsPreview