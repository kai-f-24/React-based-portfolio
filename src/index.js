import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css'
import './test.css'
// ホームで使用するコンポーネント
// import HomeComponent from './components/homeComponent/homeComponent'
// import Welcome from './components/welcome/welcome'
// import WebSite from './components/webSite/webSite'
// import MobileApp from './components/mobileApp/mobileApp'
// import Contact from './components/contact/contact'

// 遷移先
import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import WebAppPage from './pages/webAppPage'
import WebSitePage from './pages/webSitePage'
import MobileAppPage from './pages/mobileAppPage'
// import ContactPage from './contactPage/contact';
// import ProfilePage from './contactPage/profile';
// import Contact from './contactPage/contact';
// import { hover } from '@testing-library/user-event/dist/hover';



const App = () => {

  return (
    <div className='app'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path='/webApp' element={ <WebAppPage /> }></Route>
          <Route path='/webSite' element={ <WebSitePage /> }></Route>
          <Route path='/mobileApp' element={ <MobileAppPage /> }></Route>
          <Route path='/contact' element={ <ContactPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
