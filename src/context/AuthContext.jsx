import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });


  //register function
  const register = (username, password) => {
    const registerdUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (registerdUsers.some((user) => user.username === username)) {
      return { sucess: false, message: "username already exists" };
    }

    const newUser = { username, password};
    const updatedUsers = [...registerdUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    // navigate("/tasks");
    return { sucess: true };
  };


  ///login function
  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find((user) => user.username === username);

    if (!foundUser) {
      return { sucess: false, message: "user does not exist.please signup" };
    }

    if (foundUser.password !== password) {
      return { sucess: false, message: "Invalid password!" };
    }

    // const updatedUser = { ...foundUser, loggedIn: true };
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    setUser(foundUser);
    return { sucess: true };
  };
  
  
//logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
