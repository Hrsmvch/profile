import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import { Field, useFormikContext } from "formik";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import { Project } from "@/types";


export default function Colors() {
  const { values, setFieldValue } = useFormikContext<Project>();
  const [colorsRows, setColorsRows] = useState<string[]>(values?.colors || []);

  useEffect(() => {
    setFieldValue("colors", colorsRows);
  }, [colorsRows, setFieldValue]);

  const handleAddRow = async () => {
    await setColorsRows([...colorsRows, '']);
  };

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...colorsRows];
    updatedItems.splice(index, 1);
    await setColorsRows(updatedItems);
  };

  const handleChangeItem = async (index: number, value: string) => {
    const updatedItems = [...colorsRows];
    updatedItems[index] = value;
    await setColorsRows(updatedItems);
  }

  return (
    <div className={styles.block}>
      <h2>Colors</h2>

      {colorsRows?.length ? (
        <div className={styles.colors_items} key={colorsRows?.length}>
          {colorsRows?.map((item: any, index: number) => (
            <div className={styles.item}>  
                <Field
                  type="text"
                  name={`color_${index + 1}`}
                  placeholder="Title"
                  defaultValue={item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeItem(index, e.target.value)
                  }
                /> 
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
  );
}
