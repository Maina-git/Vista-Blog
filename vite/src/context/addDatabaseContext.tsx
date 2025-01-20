import React, { ReactNode, FC, useState, createContext, useContext } from "react";
import { db } from "../config/Firabse";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../config/Firabse";

// Interface for the Context
interface AddToDatabaseContextType {
  title: string;
  content: string;
  category: string;
  isSaving: boolean;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

// Context Creation
const AddToDatabaseContext = createContext<AddToDatabaseContextType | undefined>(undefined);

// Props for the Provider Component
interface AddToDatabaseProviderProps {
  children: ReactNode;
}

// Provider Component
export const DatabaseProvider: FC<AddToDatabaseProviderProps> = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Function to save data to Firestore
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content || !category) {
      alert("Please fill in all fields before saving.");
      return;
    }

    setIsSaving(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        category,
        createdAt: new Date(),
       //author: auth.currentUser?.email.charAt(0) || "Anonymous", // Default to "Anonymous" if user is not signed in
      });

      // Reset fields after successful save
      setTitle("");
      setContent("");
      setCategory("");

      alert("Blog saved successfully!");
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save the blog. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Providing Context Values
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
      }}
    >
      {children}
    </AddToDatabaseContext.Provider>
  );
};

// Custom Hook for consuming the Context
export const useDatabase = (): AddToDatabaseContextType => {
  const context = useContext(AddToDatabaseContext);

  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }

  return context;
};
