import { useState, useEffect } from "react";
import { schoolsCollectionRef } from "./constants";
import { getDocs } from "@firebase/firestore";

const useSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(schoolsCollectionRef);
    setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return schools;
};

export default useSchools;
