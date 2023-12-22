import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { ProjectDesignBase } from "@/types";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import styles from "../styles.module.scss";
import Image from "next/image";

export default function DesignProcess() {
  const { values, setFieldValue } = useFormikContext<ProjectDesignBase>();
  const [processRows, setProcessRows] = useState<string[]>(values?.designProcess.items || []);

  useEffect(() => {
    setFieldValue("designProcess.items", processRows);
  }, [processRows, setFieldValue]);

  const handleAddRow = async () => {
    await setProcessRows([...processRows, '']);
  };

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...processRows];
    updatedItems.splice(index, 1);
    await setProcessRows(updatedItems);
  };

  
  return (
    <div className={styles.block}>
      <h2>Design Process</h2>
      <Field
        type="text"
        name="designProcess.summary"
        placeholder="Design summary"
      />

      {processRows?.length ? (
        <div className={styles.process_items} key={processRows?.length}>
          {processRows?.map((item: any, index: number) => (
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
        Upload Image
      </button>
    </div>
  );
}
