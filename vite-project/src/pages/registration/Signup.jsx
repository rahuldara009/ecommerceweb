import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../fireabase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import myImage from '../../images/profile.png'; 

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true);
        setSuccessMessage(""); // Clear any previous success message

        if (name === "" || email === "" || password === "") {
            setLoading(false);
            return alert("All fields are required");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            };
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);

            setSuccessMessage("Signup Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className='border px-10 py-10 rounded-xl'>
                <div className='flex flex-col items-center'>
                    <img className='w-10 h-10 mb-3' src={myImage} alt="Profile" />
                    <h1 className='text-center text-black text-xl mb-3 font-bold'>Signup</h1>
                </div>
                {successMessage && (
                    <div className='text-center text-green-500 mb-4'>
                        {successMessage}
                    </div>
                )}
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='bg- border border-black h-7 w- mb-4 px-2 py-2 w-full lg:w-[16em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='bg- border h-7 w- border-black mb-4 px-2 py-2 w-full lg:w-[16em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='phone@paridhan.com'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-  h-7 w- border border-black mb-4 px-2 py-2 w-full lg:w-[16em] rounded-lg text-black placeholder:text-black outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className='h-9 w- bg-gradient-to-r from-purple-500 via--500 to-pink-500 w-full text-white font-bold px-2 py- rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>
                        Have an account <Link className='text-blue-500 font-bold' to={'/login'}>Login</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
