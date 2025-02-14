import React, { ReactNode, FC, useState, createContext, useContext } from "react";
import { db } from "../config/Firabse";
import { addDoc, collection, Timestamp, deleteDoc, doc } from "firebase/firestore";
import { auth } from "../config/Firabse";

interface AddToDatabaseContextType {
  title: string;
  content: string;
  category: string;
  isSaving: boolean;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  deleteBlog: (blogId: string) => Promise<void>;
}

const AddToDatabaseContext = createContext<AddToDatabaseContextType | undefined>(undefined);

interface AddToDatabaseProviderProps {
  children: ReactNode;
}

export const DatabaseProvider: FC<AddToDatabaseProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !content || !category) {
      alert("Please fill in all fields before saving.");
      return;
    }

    setIsSaving(true);

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        category,
        createdAt: Timestamp.now(),
        author: auth.currentUser?.email || "Anonymous",
        id:auth.currentUser?.email?.charAt(0)
      });

      console.log("Blog saved with ID:", docRef.id);

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

  const deleteBlog = async (blogId: string) => {
    if (!blogId) {
      alert("Invalid blog ID.");
      return;
    }

    try {
      await deleteDoc(doc(db, "blogs", blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete the blog. Please try again.");
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
        deleteBlog,
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
