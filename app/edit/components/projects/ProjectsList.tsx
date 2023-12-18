import { Project } from '@/types';
import React, { useEffect } from 'react'
import styles from "./styles.module.scss";
import { default as EditIcon } from "@/public/icons/editText.svg";
import { default as HideIcon } from "@/public/icons/eyeOff.svg";
import { default as ShowIcon } from "@/public/icons/eyeOn.svg";
import { default as RemoveIcon } from "@/public/icons/remove.svg";


type Props = { 
  handleEditProject: (data: Project) => void;
  handleGetProjects:  () => void;
  projects: Project[];
};

export default function ProjectsList({ handleEditProject, handleGetProjects, projects }: Props) {
  const handleCLickEdit = (post: Project) => handleEditProject(post);
  const handleChangePublish = async (id: string) => {
    console.log('Edit project status by id: ', id);
    // await changePublishStatus(id);
    // handleGetProjects(); 
  }
  const handleRemoveProject = async (id: string) => { 
    // await removeProjectById(id)
    // handleGetProjects();
    console.log('Edit project status by id: ', id);

  }

  useEffect(() => {
    handleGetProjects();
  }, [])

  if (!projects.length) return <div>No posts</div>;

  return (
   <div className={styles.posts}>
      <h2>All projects: {projects?.length}</h2>
      {projects?.map((post: Project) => { 
        const {name, summary, published, id, ...rest} = post;
        return (
          <div className={styles.post_item} key={id}>
          <div className={styles.post_info}>
            <h3 className={styles.post_title}>{name}</h3>
            <p className={styles.post_description}>{summary}</p>
          </div>
          <div className={styles.post_actions}>
            <div className={styles.action_item} onClick={() => handleCLickEdit(post)}><EditIcon /></div>
            <div className={styles.action_item} onClick={() => handleChangePublish(id)}>{published ? <HideIcon /> : <ShowIcon />}</div>
            <div className={styles.action_item} onClick={() => handleRemoveProject(id)}><RemoveIcon /></div>
          </div>
        </div>
        )
      })}
    </div>
  )
}
