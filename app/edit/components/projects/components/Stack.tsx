import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { ProjectFrontendBase, TechStack } from "@/types";
import styles from "../styles.module.scss";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import TagsInput from "@/components/TagsInput/TagsInput";

export default function StackBlock() {
  const { values, setFieldValue } = useFormikContext<ProjectFrontendBase>();
  const [stackRows, setStackRows] = useState<TechStack[]>(values?.stack.tech_items || []); 

  useEffect(() => {
    setFieldValue("stack.tech_items", stackRows);
  }, [stackRows, setFieldValue]);

  const handleAddRow = async () => {
    await setStackRows([...stackRows, { stack_title: "", stack_tags: [] }]);
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

  const handleTagsChange = async (index: number, values: any) => {
    const updatedItems = [...stackRows];
    updatedItems[index] = {
      ...updatedItems[index],
      stack_tags: values,
    };
    await setStackRows(updatedItems);
  };

  return (
    <div className={styles.block}>
      <h2>Technology stack</h2>
      <Field
        type="text"
        name="stack.summary"
        placeholder="Technology summary"
      />

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
              <TagsInput handleTagsChange={(values: any) => handleTagsChange(index, values)} defaultTags={item.stack_tags} />

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
