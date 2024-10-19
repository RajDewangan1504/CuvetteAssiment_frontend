import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication process
        if (email === 'test@example.com' && password === 'password123') {
            // Clear error and navigate to dashboard on success
            setError(null);
            navigate('/dashboard');
        } else {
            // Set error if authentication fails
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <Header />
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:m-auto lg:w-3/4 p-1 space-y-8 lg:space-y-0 lg:space-x-16">
                <div className="text-center lg:text-left lg:w-1/2 flex items-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className="flex justify-center items-center  rounded-lg shadow-lg border border-gray-200 ">
                    <div className="bg-white p-8 rounded shadow-md w-96">
                        <h2 className="text-2xl mb-6 text-center font-semibold ">Sign In</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
