import { getCategoriesAndDocuments } from "@/utils/firebase.utils";
import ArticleContent from "./components/ArticleContent";
 
export async function generateStaticParams() {
  const categories = await getCategoriesAndDocuments();
  const allArticles = categories.flatMap((category) => category.items);
  
  return allArticles.map((page) => ({ slug: page.slug }));
 
}

const page = () => {
  return <ArticleContent />;
};

export default page;
