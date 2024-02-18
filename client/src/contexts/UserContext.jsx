import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(sampleUserData);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};
const sampleUserData = {
  name: "Prathmesh Patil",
  email: "prprock123@gmail.com",
  month: 0,
  day: 1,
  year: 1989,
  password: "",
  username: "",
  id: "",
  bio: "SaaS Developer",
  website: "",
  location: "India",
};
