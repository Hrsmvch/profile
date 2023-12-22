import { FormProps, Project, ProjectBase, ProjectFrontendBase, SelectProps, TechStack } from '@/types'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import styles from "../styles.module.scss";
import customStyles from '@/components/formElements/customSelectStyles';
import { default as UploadIcon } from "@/public/icons/upload.svg";
import Select from 'react-select';
import StackBlock from '../components/Stack';
import KeyFeatures from '../components/KeyFeatures';
import Typography from '../components/Typography';
import Colors from '../components/Colors';
import Icons from '../components/Icons';
import FutureEnhancements from '../components/FutureEnhancements';
 

export default function FrontendForm({data, categories, handleType}: FormProps) {
  console.log('categories: ', categories);

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
        preview: data ? data?.preview : '',
        liveDemo: data ? data?.liveDemo : "",
        urlSource: data ? data?.urlSource : "",
        stack: {
          summary:  data ? data?.stack?.summary : '', 
          tech_items: data ? data?.stack?.tech_items : [],
        },
        keyFeatures: {
          preview: data ? data?.keyFeatures?.preview : '',
          items:  data ? data?.keyFeatures?.items : [],
        },
        topography: {
          font_name: data ? data?.topography?.font_name :'',
          font_summary: data ? data?.topography?.font_summary :''
        },
        colors: data ? data?.colors : [],
        icons: data ? data?.icons : [],
        futureEnhancements: {
          summary: data ? data?.futureEnhancements?.summary : '', 
          items: data ? data?.futureEnhancements?.items : [],
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
              <Field type="text" name="liveDemo" placeholder="Demo link" />
              <Field type="text" name="urlSource" placeholder="Source link" />
            </div>
          </div>
          {!data ? (
            <Select 
              key={categories?.length}
              options={categories ? categories : []}
              onChange={(select: any) => handleType(select.value)}
              defaultValue={categories?.find((el: any) => el.value == 'Frontend')}
              name="role"
              placeholder="Choose role"
              styles={customStyles} 
              components={{ IndicatorSeparator: () => null }}
            />
          ) : null}

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
