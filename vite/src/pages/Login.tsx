import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firabse';
import { useAuth } from '../context/authContext';

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
    <div className="max-w-sm mx-auto flex flex-col">
      <form onSubmit={login}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"/>
      <button onClick={handleLogin} className="w-full bg-violet text-white py-2 rounded">
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;




