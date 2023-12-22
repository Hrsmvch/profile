import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import { Field, useFormikContext } from "formik";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import { Project } from "@/types";

export default function Icons() {
  const { values, setFieldValue } = useFormikContext<Project>();
  const [iconsRows, setIconsRows] = useState<string[]>(values?.icons || []);

  useEffect(() => {
    setFieldValue("icons", iconsRows);
  }, [iconsRows, setFieldValue]);

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...iconsRows];
    updatedItems.splice(index, 1);
    await setIconsRows(updatedItems);
  };

  const handleAddRow = async () => {
    await setIconsRows([...iconsRows, '']);
  };

  return (
    <div className={styles.block}>
      <h2>Icons</h2>

      {iconsRows?.length ? (
        <div className={styles.icons_items} key={iconsRows?.length}>
          {iconsRows?.map((item: any, index: number) => (
            <div className={styles.item}>  
                 <span>IC</span> iconName.svg
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
        onClick={() => handleAddRow()}
      >
        Add icon
      </button>
    </div>
  )
}
