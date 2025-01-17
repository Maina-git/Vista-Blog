import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firabse';
import { useAuth } from '../context/authContext';
import { LuGalleryThumbnails } from "react-icons/lu";


const Login= () => {

const {
  email, setEmail, password, setPassword, login
}=useAuth();


  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <span className="text-pink-700 font-bold text-3xl p-5"><LuGalleryThumbnails/></span>
      <form onSubmit={login} className="py-10  px-5 shadow-lg rounded-lg">
        <h1  className="text-pink-700 text-center text-3xl font-bold p-10">Vista  Blog</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded outline-none"/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded outline-none"/>
      <button onClick={handleLogin} className="w-full bg-pink-700 text-white py-2 rounded">
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;




