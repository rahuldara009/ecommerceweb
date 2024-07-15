import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import Loader from '../../components/loader/Loader';
import myImage from '../../images/profile.png'; 

function Login() {
    const context = useContext(myContext)
    const { loading, setLoading } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        setLoading(true)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
   
    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className=' border px-10 py-10 rounded-xl'>
                <div className='flex flex-col items-center mb-4'>
                    <img className='w-10 h-10 mb-3' src={myImage} alt="Profile" />
                    <h1 className='text-center text-black text-xl font-bold'>Login</h1>
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='h-7 border border-black mb-4 px-2 py-2 w-full lg:w-[16em] rounded-lg text-black placeholder-text-black outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='h-7 border border-black mb-4 px-2 py-2 w-full lg:w-[16em] rounded-lg text-black placeholder-text-black outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={login}
                        className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>Don't have an account? <Link className='text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login;
