import {useContext} from "react";
import AuthContext from "@/app/AuthContext";
import ThemeContext from "@/app/ThemeContext";


export default function Login() {
  const { user, login } = useContext(AuthContext);

  const {color} = useContext(ThemeContext);
  console.log("=>(Login.tsx:10) color", color);



  return user ? (
    <p>Welcome, {user.name}!</p>
  ) : (
    <button onClick={() => login({ name: "John Doe" })}>Login</button>
  );
}
