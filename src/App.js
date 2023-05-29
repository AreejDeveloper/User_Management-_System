import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Component/Layout/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Component/Pages/HomePage'
import AboutPage from './Component/Pages/AboutPage';
import ContactPage from './Component/Pages/ContactPage';
import PageNotFound from './Component/Pages/404';
import AddUser from './Component/user/AddUser';
import EditUser from './Component/user/EditUser';
import ViewUser from './Component/user/ViewUser';
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path='/users/edit/:userId' element={<EditUser/>}/>
          <Route exact path='/users/view/:userId' element={<ViewUser/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
