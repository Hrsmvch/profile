import { Article, BlogCategory, SelectProps } from "@/types";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  createArticle,
  getCategoriesAndDocuments,
  updateArticleById,
} from "@/utils/firebase.utils";
import Select from "react-select";

type Props = {
  data: Article | null;
  handleCancel: () => void;
  handleGetArticles: () => void;
};

export default function ArticleForm({
  data,
  handleGetArticles,
  handleCancel,
}: Props) {
  const [categories, setCategories] = useState<SelectProps[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
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

  const handleSubmit = async (values: Article) => {
    const { category, ...valuesData } = values;
    const updatedData = {
      ...valuesData,
      id: values?.id ? values?.id : Date.now().toString(),
      slug: data ? data?.slug : values?.title.toLowerCase().replace(/\s+/g, "-"),
    };
    if(data){
      await updateArticleById(values.id, updatedData);
    }else{
      await createArticle(category, updatedData);
    }
    handleGetArticles();
    handleCancel();
  };

  // const handleUpdateSubmit = (e: any) => {
  //   e.preventDefault();

  //   const newArticleData: Article = {
  //     id: "1702629539164",
  //     title: "Hello Updated",
  //     summary: "Summary text",
  //     content: "Content..",
  //     slug: "hello",
  //     date: new Date(),
  //   };

  //   updateArticleById("1702629539164", newArticleData);
  // };

  return (
    <div className={styles.form_wrapper} key={data?.slug}>
      <h2>{data ? "Edit post" : "Create new post"}</h2>

      <Formik
        initialValues={{
          id: data ? data?.id : Date.now().toString(),
          title: data ? data?.title : "",
          summary: data ? data?.summary : "",
          content: data ? data?.content : "",
          slug: data ? data?.slug : "",
          date: data ? data?.date : new Date(),
          published: data ? data?.published : true,
          category: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            <Field type="text" name="title" />
            <Field type="text" name="summary" />
            <Field type="text" name="content" />
            {!data ? (
              <Select
                options={categories ? categories : []}
                onChange={(select: any) =>
                  setFieldValue("category", select.value)
                }
              />
            ) : null}

            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
