import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../../src/grobal.css'
// import './test.css'
// ホームで使用するコンポーネント
import HomeComponent from '../components/homeComponent'

const HomePage = () => {

    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll')
        };
    }, []);

    const [activeComponent, setActiveComponent] = useState('Welcome');
    const [activeText, setActiveText] = useState('Welcome');
    const [hoverComponent, setHoverComponent] = useState(null);

    return (
        <div className='app'>
            <HomeComponent
                name="Welcome"
                style="welcome"
                path="/"
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
                activeText={activeText}
                setActiveText={setActiveText}
            />

            <HomeComponent
                name="Web Application"
                style="web-app"
                path="webApp"
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
                activeText={activeText}
                setActiveText={setActiveText}
            />

            <HomeComponent
                name="Web Site"
                style="web-site"
                path="webSite"
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
                activeText={activeText}
                setActiveText={setActiveText}
            />

            <HomeComponent
                name="Smartphone Application"
                style="mobile-app"
                path="mobileApp"
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
                activeText={activeText}
                setActiveText={setActiveText}
            />

            <HomeComponent
                name="Contact"
                style="contact"
                path="contact"
                activeComponent={activeComponent}
                setActiveComponent={setActiveComponent}
                hoverComponent={hoverComponent}
                setHoverComponent={setHoverComponent}
                activeText={activeText}
                setActiveText={setActiveText}
            />
        </div>
    )
}

export default HomePage