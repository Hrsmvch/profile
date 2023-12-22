import React, { useEffect, useState } from 'react'
import styles from '../styles.module.scss';
import { Field, useFormikContext } from 'formik';
import { default as RemoveIcon } from "@/public/icons/close.svg";
import { ProjectFrontendBase } from '@/types';

export default function FutureEnhancements() {
  const { values, setFieldValue } = useFormikContext<ProjectFrontendBase>();
  const [futureEnhancementsRows, setFutureEnhancementsRows] = useState<any[]>(values?.futureEnhancements.items || []);

  useEffect(() => {
    setFieldValue("futureEnhancements.items", futureEnhancementsRows);
  }, [futureEnhancementsRows, setFieldValue]);

  const handleAddRow = async () => {
    await setFutureEnhancementsRows([...futureEnhancementsRows, { title: "", description: "" }]);
  };

   
  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...futureEnhancementsRows];
    updatedItems.splice(index, 1);
    await setFutureEnhancementsRows(updatedItems);
  };

  const handleChangeItemTitle = async (index: number, value: string) => {
    const updatedItems = [...futureEnhancementsRows];
    updatedItems[index] = {
      ...updatedItems[index],
      title: value,
    };
    await setFutureEnhancementsRows(updatedItems);
  };

  const handleChangeItemDescription = async (index: number, value: string) => {
    const updatedItems = [...futureEnhancementsRows];
    updatedItems[index] = {
      ...updatedItems[index],
      description: value,
    };
    await setFutureEnhancementsRows(updatedItems);
  };
  return (
    <div className={styles.block}>
    <h2>Future Enhancements</h2>
    <Field type="text" name="futureEnhancements.summary" placeholder="Summary"  />
 
    {futureEnhancementsRows?.length ? (
      <div className={styles.features_items} key={futureEnhancementsRows?.length}>
        {futureEnhancementsRows?.map((item: any, index: number) => (
          <div className={styles.item}>
            <div>0{index + 1} |</div>
            <div className={styles.info}>
              <Field
                type="text"
                name={`futureEnhancements_title_${index + 1}`}
                placeholder="Title"
                defaultValue={item.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeItemTitle(index, e.target.value)
                }
              />
              <Field
                type="text"
                name={`futureEnhancements_desc_${index + 1}`}
                placeholder="Description"
                defaultValue={item.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeItemDescription(index, e.target.value)
                }
              />
            </div>
            <button
              type="button"
              className={styles.remove_btn}
              onClick={() => handleRemoveRow(index)}
            >
              <RemoveIcon />
            </button>
          </div>
        ))}
      </div>
    ) : null}

    <button
      type="button"
      className={styles.add_row__btn}
      onClick={handleAddRow}
    >
      Add row
    </button> 
  </div>
  )
}
