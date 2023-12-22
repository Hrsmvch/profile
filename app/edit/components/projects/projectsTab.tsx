'use client'
import React, { useState } from 'react'
import { getProjectsCategoriesAndDocuments } from '@/utils/firebase.utils';
import styles from './styles.module.scss';
import ProjectsList from './ProjectsList';
import ProjectsForm from './forms/ProjectsForm';
import { Project } from '@/types';


export default function ProjectsTabContent() {
  const [projectToUpdate, setProjectToUpdate] = useState<Project | null>(null)
  const [projects, seProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const categories = await getProjectsCategoriesAndDocuments();
    const allProjects = categories.flatMap((category) => category.items);

    seProjects(allProjects);
  };

  const handleEditProject = (data: any) => setProjectToUpdate(data); 
  const handleCancel = () => setProjectToUpdate(null);

  return (
    <div className={styles.content_wrapper}>
      <ProjectsList handleEditProject={handleEditProject} handleGetProjects={getProjects} projects={projects} />
      <ProjectsForm data={projectToUpdate} handleGetProjects={getProjects} handleCancel={handleCancel}/>   
    </div>
  )
}
