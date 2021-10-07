import { createContext, ReactNode, useContext, useState } from "react";

interface UserProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User;
  searchUser: (username: string) => void;
}

interface User {
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  bio?: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog?: string;
  twitter_username?: string;
  company?: string;
  
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: UserProps){
  const [user, setUser] = useState<User>({} as User);

  function searchUser(username: string){
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => setUser(data))
  }

  return (
    <UserContext.Provider 
    value={{ 
      user,
      searchUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  const context = useContext(UserContext)
  return context
}