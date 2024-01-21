import { createContext, useEffect, useState } from "react";
import axios from "axios";

//firebase Imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { app } from "./src/utils/firebase";
import { toast } from "react-toastify";
import getUniqueID from "./src/helper/getUniqueID.jsx"
import { useNavigate } from "react-router-dom";

export const useHook = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);

//-----------------FireStore Collection-----------------------------------
const userRef = collection(firestore, "users");

//---------------------Storing Data------------------------------

const postUserData = async (object, uid) => {
  const userToAdd = doc(userRef, uid);

  try {
    await setDoc(userToAdd, object);
    
  } catch (error) {
    console.error('Error posting user data:', error);
}
};

const getCurrentUser = (setCurrentUserData) => {
  const currentEmail = localStorage.getItem("userEmail");
  onSnapshot(userRef, (res) => {
    setCurrentUserData(
      res.docs
        .map((docs) => {
          return { ...docs.data(), userID: docs.id };
        })
        .filter((item) => {
          return item.email === currentEmail;
        })[0]
    );
  });
};

export default function Context({children}){
    //---------Authentication Start----------------------------
    const [user, setUser] = useState('')
    const [currentUserData, setCurrentUserData] = useState("");    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);
        localStorage.setItem("userEmail", user.email);
    } else {
        setUser(null);
        localStorage.removeItem("userEmail");
    }
    });
    }, []);

    useEffect(() => {
        getCurrentUser(setCurrentUserData);
    }, []);

     //============== User Registration ======================

  const registerUserWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      postUserData(
        {
          userID: getUniqueID(),
          name: name,
          email: result.user.email,
        },
        result.user.uid
      ).then(() => {
        // Fetch current user data after successfully posting to Firestore
        getCurrentUser(setCurrentUserData);
        toast.success("Registration Successful!");
      }).catch((error) => {
        console.error("Error posting user data:", error);
        toast.error("Registration Failed. Please try again.");
      });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      toast.error("Invalid Credentials.");
    });
};

    const loginUserWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
            getCurrentUser(setCurrentUserData);
            toast.success("Login Successfull...!");
        })
        .catch((error) => toast.error("Invalid Credentials.."));
    };

        const loginWithGoogle = async () => {
        signInWithPopup(auth, googleProvider).then((result) => {
        if (allGoogle.some((item) => item.email === result.user.email)) {
            getCurrentUser(setCurrentUserData);
            return;
        } else {
            postUserData(
            {
                userID: getUniqueID(),
                name: result.user.displayName,
                email: result.user.email,
                imageLink: result.user.photoURL,
            },
            result.user.uid
            );
            getCurrentUser(setCurrentUserData);
        }
        });
    };

        const signOutUser = () => {
        signOut(auth)
        .then(() => {
            toast.success("Logout Successfull...!");
        })
        .catch((error) => toast.error("Error "));
    };
    
    //---------Authentication End----------------------------

    
   //-------------pixabay API--------------------
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [media, setMedia] = useState("images")
    const [searchQuery, setSearchQuery] = useState("")
    const [byOrder, setByOrder] = useState("popular")
    const [imageType, setImageType] = useState("all")
    const [color, setColor] = useState("")
    const [page, setPage] = useState(1)

    const PIXABAY_KEY = import.meta.env.VITE_APP_PIXABAY_KEY; 
    let BASE_URL = "";
    
    if(media === "images"){
        BASE_URL = "https://pixabay.com/api/?key=";
    }else if(media === "videos"){
        BASE_URL = "https://pixabay.com/api/videos/?key="
    }

   


 useEffect(() => { 
        setLoading(true)        
        
        setError(null); 
        axios.get(`${BASE_URL}${PIXABAY_KEY}&q=${encodeURIComponent(color+searchQuery)}&image_type=${imageType}&page=${page}&per_page=20&order=${byOrder}`)
            .then((res) => {
            setLoading(false);
            const { hits } = res.data;
            setData((prevData) => {
                // Check if the current page is the first page to avoid duplicates
                const isInitialPage = page === 1;
                return isInitialPage ? hits : [...prevData, ...hits];
            });
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!")
            })    
        }, [media,searchQuery, byOrder,imageType,color,page]);//,page


    return(
        <useHook.Provider 
            value={{  
                 user,
                setUser,
                registerUserWithEmail,
                loginUserWithEmail,
                signOutUser,
                currentUserData,
                loginWithGoogle,
                name, setName,
                email, setEmail,
                password, setPassword,            
                data,
                media, setMedia,
                loading, setLoading,
                searchQuery, setSearchQuery,
                byOrder, setByOrder,
                imageType, setImageType,
                color, setColor,
                page, setPage
                }}>
            {children}
        </useHook.Provider>
    )
}




