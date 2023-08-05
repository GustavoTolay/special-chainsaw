import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/Login";
import SignIn from "./pages/Singin";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Creator from "./pages/Creator";
import AddCategory from "./pages/AddCategory";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path='/category/:category' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route
          path='/product/:id'
          errorElement={<Home />}
          element={<Products />}
        />
        <Route path='/edititem/:id' element={<Editor />} />
        <Route path='/additem' element={<Creator />} />
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
