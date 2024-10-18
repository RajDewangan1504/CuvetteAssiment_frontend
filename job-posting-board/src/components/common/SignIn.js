import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { MdEmail, MdPhone } from 'react-icons/md'; // Importing icons

const SignIn = () => {

    const navigate = useNavigate();
    const [emailOtp, setEmailOtp] = useState('');
    const [mobileOtp, setMobileOtp] = useState('');

    const [emailOtpValid, setEmailOtpValid] = useState(null); 
    const [mobileOtpValid, setMobileOtpValid] = useState(null); 

    const correctEmailOtp = '123456';
    const correctMobileOtp = '654321';

    const validateEmailOtp = () => {
        if (emailOtp === correctEmailOtp) {
            setEmailOtpValid(true);
        } else {
            setEmailOtpValid(false);
        }
    };

    const validateMobileOtp = () => {
        if (mobileOtp === correctMobileOtp) {
            setMobileOtpValid(true);
        } else {
            setMobileOtpValid(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailOtpValid && mobileOtpValid) {
            console.log('Both OTPs are valid, proceed!');
            navigate('/dashboard');
        } else {
            console.log('One or both OTPs are invalid.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center m-auto w-full lg:w-3/4 p-1 space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="text-center lg:text-left lg:w-1/2 flex items-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>

            <div className="md:w-1/3 w-full bg-white p-8 justify-center items-center rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                <p className="text-gray-500 text-center mb-6">Lorem Ipsum is simply dummy text</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email OTP Field */}
                    <div className="relative">
                        {/* <label htmlFor="email-otp" className="block text-gray-600 mb-1">Email OTP</label> */}
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <MdEmail size={20} />
                            </span>
                            <input
                                type="text"
                                id="email-otp"
                                value={emailOtp}
                                onChange={(e) => setEmailOtp(e.target.value)}
                                placeholder="Email OTP"
                                className={`pl-10 w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    emailOtpValid === false ? 'border-red-500' : ''
                                }`}
                            />
                            {emailOtpValid === true && (
                                <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
                                    &#10004;
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            onClick={validateEmailOtp}
                            className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Verify 
                        </button>

                        {emailOtpValid === false && <p className="text-red-500 mt-2">Invalid Email OTP</p>}
                    </div>

                    {/* Mobile OTP Field */}
                    <div className="relative">
                        {/* <label htmlFor="mobile-otp" className="block text-gray-600 mb-1">Mobile OTP</label> */}
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <MdPhone size={20} />
                            </span>
                            <input
                                type="text"
                                id="mobile-otp"
                                value={mobileOtp}
                                onChange={(e) => setMobileOtp(e.target.value)}
                                placeholder="Mobile OTP"
                                className={`pl-10 w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    mobileOtpValid === false ? 'border-red-500' : ''
                                }`}
                            />
                            {mobileOtpValid === true && (
                                <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
                                    &#10004;
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            onClick={validateMobileOtp}
                            className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Verify 
                        </button>

                        {mobileOtpValid === false && <p className="text-red-500 mt-2">Invalid Mobile OTP</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
