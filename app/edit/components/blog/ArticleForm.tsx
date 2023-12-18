import { Article, BlogCategory, SelectProps } from "@/types";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  createArticle,
  getCategoriesAndDocuments,
  updateArticleById,
} from "@/utils/firebase.utils";
import Select from "react-select";
import customStyles from "@/components/formElements/customSelectStyles";
import { Editor } from "@tinymce/tinymce-react";
import tinyInit from "@/utils/tinyInit";

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

  const handleSubmit = async (values: Article,  { resetForm }: FormikHelpers<Article>) => {
    const { category, ...valuesData } = values;
    const updatedData = {
      ...valuesData,
      id: values?.id ? values?.id : Date.now().toString(),
      slug: data
        ? data?.slug
        : values?.title.toLowerCase().replace(/\s+/g, "-"),
    };
    if (data) {
      await updateArticleById(values.id, updatedData);
    } else {
      await createArticle(category, updatedData);
    }
    handleGetArticles();
    resetForm(); 
    handleCancel();
  };

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
            <Field type="text" name="title" placeholder="Post title" />
            <Field type="text" name="summary" placeholder="Post summary" />
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

            <Editor
              apiKey="c08pfdmk9mbky3nzp8iql8ydnjpne7yvqo5nkq6vqjrrcvqa"
              value={values?.content || ""}
              init={tinyInit}
              onEditorChange={(content: any) =>
                setFieldValue("content", content)
              }
            />

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
  );
}
