import { FormProps, Project, ProjectBase, ProjectFrontendBase, SelectProps, TechStack } from '@/types'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import styles from "../styles.module.scss";
import customStyles from '@/components/formElements/customSelectStyles';
import { default as UploadIcon } from "@/public/icons/upload.svg";
import Select from 'react-select';
import StackBlock from './Stack';
import KeyFeatures from './KeyFeatures';
import Typography from './Typography';
import Colors from './Colors';
import Icons from './Icons';
import FutureEnhancements from './FutureEnhancements';
 

export default function FrontendForm({data, categories, handleType}: FormProps) {

  const handleSubmit = async (values: ProjectFrontendBase,  { resetForm }: FormikHelpers<ProjectFrontendBase>) => {
    // const { category, ...valuesData } = values;
    // const updatedData = {
    //   ...valuesData,
    //   id: values?.id ? values?.id : Date.now().toString(),
    //   slug: data
    //     ? data?.slug
    //     : values?.name.toLowerCase().replace(/\s+/g, "-"),
    // };
    console.log(`values.id: ${values.id}`);
    console.log({values});

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
    <>
    <Formik
      initialValues={{
        id: data ? data?.id : Date.now().toString(),
        name: data ? data?.name : "",
        summary: data ? data?.summary : "",
        slug: data ? data?.slug : "",
        date: data ? data?.date : new Date(),
        published: data ? data?.published : true, 
        stack: {
          summary: '',
          tech_items: [],
        },
        keyFeatures: {
          preview: '',
          items: [],
        },
        topography: {
          font_name: '',
          font_summary: ''
        },
        colors: [],
        icons: [],
        futureEnhancements: {
          summary: '',
          tech_items: [],
        } 
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
                  options={categories ? categories : []}
                  onChange={(select: any) =>{
                    handleType(select.value)
                  }
                  }
                  name="role"
                  placeholder="Choose role"
                  styles={customStyles} 
                  components={{ IndicatorSeparator: () => null }}
                />
              ) : null}
            </div>
          </div>

          <StackBlock />
          <KeyFeatures /> 
          <Typography /> 
          <Colors />
          <Icons /> 
          <FutureEnhancements />
 
          <div className={styles.actions}>
            <button type="button">
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </Form>
      )}
    </Formik>
    </>
  )
}
