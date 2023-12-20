import React from 'react'
import { Field, useFormikContext } from 'formik';
import { ProjectFrontendBase } from '@/types';
import styles from '../styles.module.scss';

export default function Typography() {
  const { values } = useFormikContext<ProjectFrontendBase>();  
 
  return (
    <div className={styles.block}>
      <h2>Typography</h2> 
      <Field type="text" name="topography.font_name" defaultValue={values?.topography.font_name || ''} placeholder="Font name"  />     
      <Field type="text" name="topography.font_summary" defaultValue={values?.topography.font_summary || ''} placeholder="Font summary"  />      
    </div>
  ); 
}
