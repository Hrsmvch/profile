import { getProjectsCategoriesAndDocuments } from "@/utils/firebase.utils";
import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import FrontendForm from "./FrontendForm";
import DesignForm from "./DesignForm";
import { Project, ProjectFrontendBase, SelectProps } from "@/types";

type Props = {
  data: Project | null;
  handleCancel: () => void;
  handleGetProjects: () => void;
};

export default function ProjectsForm({
  data,
  handleGetProjects,
  handleCancel,
}: Props) {
  const [projectType, setProjectType] = useState("Frontend");
  const [categories, setCategories] = useState<SelectProps[]>([]);

  useEffect(() => {
    if (data) {
      "stack" in data ? setProjectType("Frontend") : setProjectType("Design");
    }
  }, [data]);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getProjectsCategoriesAndDocuments();
      setCategories(
        categoryMap?.length
          ? categoryMap.map((category) => ({
              label: category.title,
              value: category.title,
            }))
          : []
      );
    };

    getCategories();
  }, []);

  return (
    <div className={styles.form_wrapper} key={data?.slug}>
      <h2>{data ? "Edit project" : "Create new project"}</h2>
      {projectType == "Frontend" ? (
        <FrontendForm
          data={data}
          categories={categories}
          handleType={setProjectType}
        />
      ) : (
        <DesignForm
          data={data}
          categories={categories}
          handleType={setProjectType}
        />
      )}
    </div>
  );
}
