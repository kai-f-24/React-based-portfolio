import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './global.css'
// import './test.css'
// ホームで使用するコンポーネント
// import HomeComponent from './components/homeComponent/homeComponent'
import Contact from '../components/contact';
import Profile from '../components/profile';

const ContactPage = () => {

    const [activeContactComponent, setActiveContactComponent] = useState("Contact");
    const [hoverComponent, setHoverComponent] = useState(null);

    return (
        <div className='app'>
            <Contact
                name_="Contact"
                activeContactComponent={activeContactComponent}
                setActiveContactComponent={setActiveContactComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
            // isActive={activeComponent === 'Contact'}
            // onClick={() => handleClick('Contact')}

            // onMouseEnter={(e) => checkActive(e, "Contact")}
            // onMouseLeave={handleMouseLeave}
            // isHover={
            //   hoverComponent === "Contact" ? "hover" :
            //     hoverComponent ? "inhover" : ""
            // }
            />

            <Profile
                // 子要素に渡す基本情報[name, nameごとに適用するcss]
                name="Profile"
                color="contact-color"
                h2="contact-h2"
                activeContactComponent={activeContactComponent}
                setActiveContactComponent={setActiveContactComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}

            // active or 非activeを判断
            // isActive={activeComponent === 'Profile'}
            // isProfileActive={activeComponent}
            // onClick={() => handleClick('Profile')}

            // // hover or 非hoverを判断
            // onMouseEnter={(e) => checkActive(e, "Profile")}
            // onMouseLeave={handleMouseLeave}
            // isHover={
            //   hoverComponent === "Profile" ? "hover" :
            //     hoverComponent ? "inhover" : ""
            // }
            />
        </div>
    )
}

export default ContactPage