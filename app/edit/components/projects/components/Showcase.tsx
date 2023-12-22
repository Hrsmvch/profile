import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { ProjectDesignBase, TechStack } from "@/types";
import styles from "../styles.module.scss";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import TagsInput from "@/components/TagsInput/TagsInput";
import Image from "next/image";

export default function Showcases() {
  const { values, setFieldValue } = useFormikContext<ProjectDesignBase>();
  const [showcasesRows, setShowcases] = useState<string[]>(values?.showcase.items || []);

  useEffect(() => {
    setFieldValue("showcase.items", showcasesRows);
  }, [showcasesRows, setFieldValue]);

  const handleAddRow = async () => {
    await setShowcases([...showcasesRows, '']);
  };

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...showcasesRows];
    updatedItems.splice(index, 1);
    await setShowcases(updatedItems);
  };
 

  return (
    <div className={styles.block}>
      <h2>Showcases</h2>
      <Field
        type="text"
        name="showcases.summary"
        placeholder="Showcases summary"
      />

      {showcasesRows?.length ? (
        <div className={styles.showcase_items} key={showcasesRows?.length}>
          {showcasesRows?.map((item: any, index: number) => (
            <div className={styles.item}> 
              <Image src={'https://picsum.photos/400/200'} width={176} height={176} alt="Temp Image" />
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
        Upload image
      </button>
    </div>
  );
}
