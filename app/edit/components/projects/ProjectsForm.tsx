import { Project, ProjectBase, SelectProps } from '@/types';
import { getProjectsCategoriesAndDocuments } from '@/utils/firebase.utils';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import Select from 'react-select';
import customStyles from '@/components/formElements/customSelectStyles';
import { default as UploadIcon } from "@/public/icons/upload.svg";

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
  const [categories, setCategories] = useState<SelectProps[]>([]);

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

  const handleSubmit = async (values: ProjectBase,  { resetForm }: FormikHelpers<ProjectBase>) => {
    const { category, ...valuesData } = values;
    const updatedData = {
      ...valuesData,
      id: values?.id ? values?.id : Date.now().toString(),
      slug: data
        ? data?.slug
        : values?.name.toLowerCase().replace(/\s+/g, "-"),
    };
    console.log(`values.id: ${values.id}`);
    console.log({updatedData});

    // if (data) {
    //   await updateArticleById(values.id, updatedData);
    // } else {
    //   await createArticle(category, updatedData);
    // }
    // handleGetArticles();
    // resetForm(); 
    // handleCancel();
  };

  return (
    <div className={styles.form_wrapper} key={data?.slug}>
    <h2>{data ? "Edit project" : "Create new project"}</h2>

    <Formik
      initialValues={{
        id: data ? data?.id : Date.now().toString(),
        name: data ? data?.name : "",
        summary: data ? data?.summary : "",
        slug: data ? data?.slug : "",
        date: data ? data?.date : new Date(),
        published: data ? data?.published : true,
        category: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form>
          <div className={styles.main_info}>
            <div className={styles.img_preview}><UploadIcon /> Upload Preview</div>
            <div className={styles.info_preview}>
              <Field type="text" name="name" placeholder="Project name" />
              <Field type="text" name="summary" placeholder="Project summary" />
              {!data ? (
                <Select
                  key={values?.category}
                  options={categories ? categories : []}
                  onChange={(select: any) =>
                    setFieldValue("category", select.value)
                  }
                  name="role"
                  placeholder="Choose role"
                  styles={customStyles}
                  defaultValue={values?.category ? categories?.find((el) => el.value == values?.category) : null}
                  components={{ IndicatorSeparator: () => null }}
                />
              ) : null}
            </div>
          </div>

          <div className={styles.block}>
            <h2>Stuck</h2>
          </div>

          <div className={styles.block}>
            <h2>Key Features</h2>
          </div>

          <div className={styles.block}>
            <h2>Typography</h2>
          </div>

          <div className={styles.block}>
            <h2>Colors</h2>
          </div>

          <div className={styles.block}>
            <h2>Icons</h2>
          </div>

          <div className={styles.block}>
            <h2>Future Enhancements</h2>
          </div>
 
          <div className={styles.actions}>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  )
}
