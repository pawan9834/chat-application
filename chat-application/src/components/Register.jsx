import React, { useState } from 'react';

const Register = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // State for alert message
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setAlert({
        show: true,
        message: 'Please fill in all fields!',
        type: 'error',
      });
      return;
    }

    // Simulate email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({
        show: true,
        message: 'Please enter a valid email address!',
        type: 'error',
      });
      return;
    }

    // Simulate password length validation
    if (formData.password.length < 6) {
      setAlert({
        show: true,
        message: 'Password must be at least 6 characters long!',
        type: 'error',
      });
      return;
    }

    // Simulate successful registration
    try {
      // Mock API call or registration logic
      console.log('Registering:', formData);
      setAlert({
        show: true,
        message: 'Registration successful!',
        type: 'success',
      });

      // Reset form after success
      setFormData({ fullName: '', email: '', password: '' });
    } catch (error) {
      setAlert({
        show: true,
        message: 'Registration failed. Please try again!',
        type: 'error',
      });
    }

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] background-image">
      <div className="bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="text-center text-[28px] font-bold">Sign Up</h1>
          <p className="text-center text-sm text-gray-400">Welcome, Create Account to Continue</p>
        </div>
        <div className="w-full">
          {/* Alert Message */}
          {alert.show && (
            <div
              className={`w-full p-2 mb-3 text-center text-white rounded-md ${
                alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {alert.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="bg-[#01aa85] text-white font-bold w-full p-2 rounded-md flex gap-2 items-center justify-center"
            >
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-plus"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" x2="19" y1="8" y2="14" />
                <line x1="22" x2="16" y1="11" y2="11" />
              </svg>
            </button>
          </form>
          <div className="mt-4 text-center text-gray-400 text-sm flex justify-center items-center">
            <button>Already have an Account? Sign in</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;