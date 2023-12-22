import React from 'react'
import styles from './styles.module.scss' 

export default function TagsInput({handleTagsChange, defaultTags}: any) {
  const [tags, setTags] = React.useState(defaultTags); 
	
	const removeTags = (indexToRemove: any) => {
		setTags([...tags?.filter((_: any, index: any) => index !== indexToRemove)]);
		handleTagsChange([...tags?.filter((_: any, index: any) => index !== indexToRemove)]);
	};

	const addTags = (event: any) => { 
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			handleTagsChange([...tags, event.target.value]);
			event.target.value = "";
		}
	};

  return (
    <div className={styles.tags_input}>
			<ul id={styles.tags}>
				{tags?.map((tag: string, index?: number) => (
					<li key={index} className={styles.tag}>
						<span className={styles.tag_close_icon}
							onClick={() => removeTags(index)}
						>x</span>
						<span className={styles.tag_title}>{tag}</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				placeholder={tags?.length ? '' : 'Type tag'}
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null} 
			/>
		</div>
  )
}
