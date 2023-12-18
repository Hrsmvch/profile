import { getCategoriesAndDocuments, getProjectsCategoriesAndDocuments } from "@/utils/firebase.utils";
import ProjectContent from "./components/ProjectContent";
 
export async function generateStaticParams() {
  const categories = await getProjectsCategoriesAndDocuments();
  const allProjects = categories.flatMap((category) => category.items);
  
  return allProjects.map((page) => ({ slug: page.slug }));
}

const page = () => {
  return <ProjectContent />;
};

export default page;
