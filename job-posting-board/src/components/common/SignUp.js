import React, { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiBriefcase, FiUsers, FiLock } from 'react-icons/fi'; // Import the icons
import {  useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUpSuccess }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        email: '',
        employeeSize: '',
        password: '',  // Add password to the formData
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const navigateToLogin = () => {
       navigate('/login');  // Navigate to login page
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone || !validatePhoneNumber(formData.phone)) newErrors.phone = 'Valid phone number is required';
        if (!formData.company) newErrors.company = 'Company name is required';
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.employeeSize) newErrors.employeeSize = 'Employee size is required';
        if (!formData.password) newErrors.password = 'Password is required';  // Password validation

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form Data:', formData);
            onSignUpSuccess();
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:m-auto lg:w-3/4 p-1 space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="text-center lg:text-left lg:w-1/2 flex items-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg w-full lg:w-1/2 flex items-center">
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
                    <p className="text-gray-600 mb-3 text-center">Lorem Ipsum is simply dummy text</p>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiUser className="text-gray-500 ml-3" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiPhone className="text-gray-500 ml-3" />
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone no."
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Company */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiBriefcase className="text-gray-500 ml-3" />
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiMail className="text-gray-500 ml-3" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Company Email"
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Employee Size */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiUsers className="text-gray-500 ml-3" />
                                <input
                                    type="text"
                                    id="employeeSize"
                                    name="employeeSize"
                                    value={formData.employeeSize}
                                    onChange={handleChange}
                                    placeholder="Employee Size"
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.employeeSize && <p className="text-red-500 text-xs mt-1">{errors.employeeSize}</p>}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                                <FiLock className="text-gray-500 ml-3" /> {/* Password Icon */}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="flex-1 block w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center mb-6 text-center justify-center">
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 text-center">
                                By clicking on proceed you will accept our <br /> <a href="#terms" className="text-blue-600 hover:underline">Terms & Conditions</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Proceed
                        </button>
                        <div className="mt-4 text-center">
                            <p>
                                Already registered?{' '}
                                <button
                                    onClick={navigateToLogin}
                                    className="text-blue-500 hover:underline"
                                >
                                    Login here
                                </button>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
