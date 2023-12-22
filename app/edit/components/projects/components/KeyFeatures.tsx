import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import { Field, useFormikContext } from "formik";
import { default as RemoveIcon } from "@/public/icons/close.svg";
import { default as UploadIcon } from "@/public/icons/upload.svg";
import { KeyFeatureItem, Project, ProjectFrontendBase } from "@/types";

export default function KeyFeatures() {
  const { values, setFieldValue } = useFormikContext<ProjectFrontendBase>();
  const [featuresRows, setFeaturesRows] = useState<KeyFeatureItem[]>(values?.keyFeatures?.items || []);

  useEffect(() => {
    setFieldValue("keyFeatures.items", featuresRows);
  }, [featuresRows, setFieldValue]);

  const handleAddRow = async () => {
    await setFeaturesRows([...featuresRows, { title: "", description: "" }]);
  };

  const handleUpdatePreview = async () => {
    setFieldValue("keyFeatures.preview", '');
  };

  const handleRemoveRow = async (index: number) => {
    const updatedItems = [...featuresRows];
    updatedItems.splice(index, 1);
    await setFeaturesRows(updatedItems);
  };

  const handleChangeItemTitle = async (index: number, value: string) => {
    const updatedItems = [...featuresRows];
    updatedItems[index] = {
      ...updatedItems[index],
      title: value,
    };
    await setFeaturesRows(updatedItems);
  };

  const handleChangeItemDescription = async (index: number, value: string) => {
    const updatedItems = [...featuresRows];
    updatedItems[index] = {
      ...updatedItems[index],
      description: value,
    };
    await setFeaturesRows(updatedItems);
  };

  return (
    <div className={styles.block}>
      <h2>Key features</h2>

      {featuresRows?.length ? (
        <div className={styles.features_items} key={featuresRows?.length}>
          {featuresRows?.map((item: any, index: number) => (
            <div className={styles.item}>
              <div>0{index + 1} |</div>
              <div className={styles.info}>
                <Field
                  type="text"
                  name={`keyFeatures_title_${index + 1}`}
                  placeholder="Title"
                  defaultValue={item.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeItemTitle(index, e.target.value)
                  }
                />
                <Field
                  type="text"
                  name={`keyFeature_desc_${index + 1}`}
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

      <button
        type="button"
        className={styles.preview_btn}
        onClick={handleUpdatePreview}
      >
        <UploadIcon /> Upload preview
      </button>
    </div>
  );
}
