import React, { useEffect } from 'react';
import '../../index.css';

const SignUpForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    }


    useEffect(() => {
        const checkboxDropdown = document.querySelector(".checkbox-dropdown");
        const humanForm =  document.querySelector("#humanForm");

        const handleClickOutside = (e: MouseEvent) => {
            if (!humanForm?.contains(e.target as Node)) {
                humanForm?.classList.remove("is-active");
            }
        };

        const handleCheckboxClick = () => {
            humanForm?.classList.toggle("is-active")
        }
    
        checkboxDropdown?.addEventListener('click', () => {
            humanForm?.classList.toggle("is-active");
        });

        document.addEventListener("click", handleClickOutside);

        return () => {
            checkboxDropdown?.removeEventListener("click", handleCheckboxClick);
            document.removeEventListener("click", handleClickOutside)
        };
    
    
    }, []);




    return (
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Sign Up</button>
        </div>
      </form>
    );
};

export default SignUpForm