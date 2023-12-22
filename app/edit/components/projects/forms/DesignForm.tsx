import { Project, ProjectBase, SelectProps } from '@/types'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import styles from "../styles.module.scss";
import customStyles from '@/components/formElements/customSelectStyles';
import { default as UploadIcon } from "@/public/icons/upload.svg";
import Select from 'react-select';  
import Typography from '../components/Typography';
import Colors from '../components/Colors';
import Icons from '../components/Icons';
import DesignProcess from '../components/DesignProcess';
import Showcases from '../components/Showcase';

type Props = { data: any, categories: SelectProps[], handleType: any }

export default function DesignForm({data, categories, handleType}: Props) {
  
  const handleSubmit = async (values: any,  { resetForm }: FormikHelpers<any>) => {
    // const { category, ...valuesData } = values;
    // const updatedData = {
    //   ...valuesData,
    //   id: values?.id ? values?.id : Date.now().toString(),
    //   slug: data
    //     ? data?.slug
    //     : values?.name.toLowerCase().replace(/\s+/g, "-"),
    // };
    console.log(`values.id: ${values.id}`);
    // console.log({updatedData});

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
        designProcess: {
          summary: data ? data?.designProcess?.summary : '',
          items: data ? data?.designProcess?.items : [],
        },
        topography: {
          font_name: data ? data?.topography?.font_name :'',
          font_summary: data ? data?.topography?.font_summary :''
        },
        colors: data ? data?.colors : [],
        icons: data ? data?.icons : [],
        showcase: {
          summary: data ? data?.showcase?.summary : '',
          items: data ? data?.showcase?.items : [],
        },
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
              defaultValue={categories?.find((el: any) => el.value == 'Design')}
              options={categories ? categories : []}
              onChange={(select: any) => handleType(select.value)}
              name="role"
              placeholder="Choose role"
              styles={customStyles}
              components={{ IndicatorSeparator: () => null }}
            />
          ) : null}
 
          <DesignProcess />
          <Typography /> 
          <Colors />
          <Icons />  
          <Showcases />
 
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
