import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState([
        { userName: 'John', password: 'john1234', email: 'john@gmail.com', type: 'Department-manager' },
        { userName: 'Crish', password: 'crish1234', email: 'crish@gmail.com', type: 'Store-manager' }
    ]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credErr, setCredErr] = useState(false);

    useEffect(() => {
        const jsonAsString = JSON.stringify(userData);
        localStorage.setItem('usersData', jsonAsString);
    }, []);

    const handleSubmit = (e) => {
        // e.preventDefault();
        let getData = JSON.parse(localStorage.getItem('usersData'));
        console.log('getData', getData)

        for (const user of getData) {
            if (user.userName === username && user.password === password) {
                const filteredUser = getData.filter(u => u.userName === username);
                // console.log('user', username, password, 'true', filteredUser)

                localStorage.setItem('finalUser', JSON.stringify(filteredUser));
                navigate('/dashboard');
                break;
            } else {
                setCredErr(true);
            }
        }

    };


    return (
        <div className="selection:bg-rose-500 selection:text-white">
            <div className="min-h-screen bg-rose-100 flex justify-center items-center">
                <div className="p-8 flex-1">
                    <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                        {/* <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div> */}
                        <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                            <h1 className="text-2xl font-semibold text-gray-900">Login to continue!</h1>
                            <form
                                className="mt-12"
                            // onSubmit={handleSubmit}
                            >
                                <div className="relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => {
                                            setCredErr(false);
                                            setUsername(e.target.value)
                                        }}
                                    />
                                    <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User name</label>
                                </div>
                                <div className="mt-10 relative">
                                    <input id="password"
                                        type="password"
                                        name="password"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            setCredErr(false);
                                            setPassword(e.target.value)
                                        }}
                                    />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>

                                {
                                    credErr
                                        ?
                                        <div className='mt-5 text-md text-red-600 text-center text-semibold'>
                                            Wrong Credintials !
                                        </div>
                                        :
                                        <div className='mt-5 text-md text-semibold'>&nbsp;</div>
                                }

                                <div
                                    onClick={handleSubmit}
                                    className="mt-5 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer">
                                    Login
                                </div>
                            </form>
                            {/* <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
