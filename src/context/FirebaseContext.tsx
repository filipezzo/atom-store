import { ICategories, IProduct } from "@/types/types";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";

type FirebaseContextType = {
  category: ICategories[];
  products: IProduct[];
  authenticateWithGoogle: () => Promise<void>;
  user: User;
};

const firebaseConfig = {
  apiKey: "AIzaSyCyhNZHszhjECIJVYgUxLcdJBO9rd888vA",
  authDomain: "atom-f5593.firebaseapp.com",
  projectId: "atom-f5593",
  storageBucket: "atom-f5593.appspot.com",
  messagingSenderId: "469873511490",
  appId: "1:469873511490:web:a6b8a30c05b921247bf1db",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);
const FirebaseContext = createContext<FirebaseContextType>({
  category: [],
  products: [],
  authenticateWithGoogle: async () => {},
  user: {} as User,
});

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<ICategories[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [user, setUser] = useState<User>({} as User);

  const authenticateWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const data = await signInWithPopup(auth, provider);
      setUser(data.user);
    } catch (error) {
      console.error("Authentication error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(collection(db, "categorias"));

        const categoryArray: ICategories[] = data.docs.map((doc) => ({
          id: doc.id,
          category: doc.data().category || "",
          img: doc.data().img || "",
          text: doc.data().text || "",
        }));
        setCategory(categoryArray);
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getDocs(collection(db, "produtos"));
        const produtoArray: IProduct[] = data.docs.map((doc) => ({
          id: doc.data().id || 0,
          category: doc.data().category || "",
          desc: doc.data().desc || "",
          img: doc.data().img || "",
          text: doc.data().text || "",
          price: doc.data().price || 0,
          quantity: doc.data().quantity || 0,
        }));
        setProducts(produtoArray);
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{ category, products, authenticateWithGoogle, user }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
