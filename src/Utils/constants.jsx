import { db } from "./firebase-config";
import { collection, query, orderBy } from "@firebase/firestore";

export const experienceCollectionRef = query(
  collection(db, "experience"),
  orderBy("endDate", "desc")
);

export const schoolsCollectionRef = query(
  collection(db, "education"),
  orderBy("startYear", "desc")
);

export const fullName = "Cristian Manolescu";
export const git = "https://github.com/CristiManolescu";
export const linkedIn = "https://www.linkedin.com/in/cristianmanolescu/";
export const email = "mailto:cristianm.manolescu96@gmail.com";
