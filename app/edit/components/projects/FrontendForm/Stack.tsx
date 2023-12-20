import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { TechStack } from "@/types";
import styles from "../styles.module.scss";

export default function StackBlock() {
  const { values, setFieldValue } = useFormikContext(); 
  const [stackRows, setStackRows] = useState<TechStack[]>([]);

  useEffect(() => {
    setFieldValue('stack.tech_items', stackRows);
  }, [stackRows, setFieldValue]);

  const handleAddRow = async () => {
    await setStackRows([...stackRows, { stack_title: '', stack_tags: [] }]);
  };

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...stackRows];
    updatedItems.splice(index, 1);
    await setStackRows(updatedItems);
  };

  const handleTechNameChange = async (index: number, value: string) => {
    const updatedItems = [...stackRows];
    updatedItems[index] = {
      ...updatedItems[index],
      stack_title: value,
    };
    await setStackRows(updatedItems);
  };
 
  return (
    <div className={styles.block}>
      <h2>Technology stack</h2> 
      <Field type="text" name="stack.summary" placeholder="Technology summary"  />

      {stackRows?.length ? (
        <div className={styles.tech_items} key={stackRows?.length}>
          {stackRows?.map((item: any, index: number) => (
            <div className={styles.item}>
              <div>0{index + 1} |</div>
              <Field
                type="text"
                name={`tech_name_${index + 1}`}
                placeholder="Tech name"
                defaultValue={item.stack_title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleTechNameChange(index, e.target.value)
                }
              />
              <input type="text" placeholder="tags (future)" />
              <div onClick={() => handleRemoveRow(index)}>X</div>
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
