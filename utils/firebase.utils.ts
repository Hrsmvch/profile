import { Article, BlogCategory } from "@/types";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
 
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  Firestore,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  Timestamp,
  where,
  DocumentData
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDLER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID, 
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


// USERS
export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) { 
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log('Error updating user document', error.message);
    }
  } else { 
    throw new Error('User does not exist. Sign in not allowed.'); 
  }

  return userDocRef;
};

export const signInUserWithEmailAndPassword = async ({email, password}: any) => { 
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth); 

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);



// BLOG
export const addCollectionAndDocuments = async (collectionKey: any, objectsToAdd: any) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Done!');
}

export const getCategoriesAndDocuments = async (): Promise<BlogCategory[]> => {
  const collectionRef = collection(db, 'blog');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as BlogCategory);
};

export const createArticle = async (
  categoryTitle: string,
  articleData: Article
): Promise<void> => {
  const categoryDocRef = doc(db, 'blog', categoryTitle.toLowerCase());
 
  const serverTimestamp = Timestamp.fromDate(new Date());
 
  await updateDoc(categoryDocRef, {
    items: arrayUnion({
      ...articleData,
      date: serverTimestamp,
    }),
  });
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  const allArticles = (await getCategoriesAndDocuments()).flatMap(category => category.items);
  const foundArticle = allArticles.find(article => article.slug === slug);

  if (!foundArticle) {
    return null; 
  }

  return foundArticle;
}


export const updateArticleById = async (
  id: string,
  updatedArticleData: Partial<Article>
): Promise<void> => {
  const categories = await getCategoriesAndDocuments();

  for (const category of categories) {
    const foundIndex = category.items.findIndex(article => article.id === id);

    if (foundIndex !== -1) {
      const updatedItems = [...category.items];
      updatedItems[foundIndex] = { ...updatedItems[foundIndex], ...updatedArticleData };

      const categoryDocRef = doc(db, 'blog', category.title.toLowerCase());
      await updateDoc(categoryDocRef, { items: updatedItems });
      break;  
    }
  }
};