import React, { ReactNode, FC, useState, createContext, useContext } from "react";
import { db } from "../config/Firabse";
import { addDoc, collection } from "firebase/firestore";


interface AddToDatabaseContextType {
  title: string;
  content: string;
  category: string;
  isSaving:boolean;
  setIsSaving:React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const AddToDatabaseContext = createContext<AddToDatabaseContextType | undefined>(undefined);

interface AddToDatabaseContextProps {
  children: ReactNode;
}
export const DatabaseProvider: FC<AddToDatabaseContextProps> = ({ children }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isSaving, setIsSaving]=useState(false);
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content || !category) {
      alert("Please fill in all fields and select a category.");
      return;
    }
    setIsSaving(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        category,
        createdAt: new Date(),
        
      });
      setTitle('');
      setContent('');
      setCategory('');

      alert("Blog saved successfully!");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog. Please try again.");
    } finally{
        setIsSaving(false);
    }

  };

  return (
    <AddToDatabaseContext.Provider
      value={{
        title,
        content,
        category,
        setTitle,
        setContent,
        setCategory,
        handleSave,
        isSaving,
        setIsSaving
      }}>
      {children}
    </AddToDatabaseContext.Provider>
  );
};


export const useDatabase = (): AddToDatabaseContextType => {
  const context = useContext(AddToDatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};
