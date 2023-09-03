import { useState, useEffect } from "react";
import { experienceCollectionRef } from "./constants";
import { getDocs } from "@firebase/firestore";

const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(experienceCollectionRef);
    setExperiences(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return experiences;
};

export default useExperiences;
