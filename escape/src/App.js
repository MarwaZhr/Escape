import React, { useState } from 'react';
// import './App.css';
import Store from './store.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './aboutUs.js';
import Navbar from './NavBar.js';
import Home from './home.js'
import Post from './Post.js';
import Admin from './Admin.js';
import Account from './Account.js';
import Blogs from "./Blogs.js";
import PostBlog from "./PostBlog.js"
import AdminBlog from './AdminBlog.js';
import Cart from './cart.js';
import UserAccount from './UserAccount.js';
import { CartProvider } from 'react-use-cart';
import OneBlog from "./OneBlog.js";
import ViewPost from './viewPost.js';

function App() {
  const [blog, setBlog] = useState({});
  //  const [addToCart, setCart] = useState([])

  console.log(blog)

  const [id, setId] = useState({ id: '', auth: false });
  console.log("app.js", id)

  return (
    <Router>
      <Navbar />

      <CartProvider id={id} setId={setId}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/store" component={() => <Store id={id} />} />
        <Route path="/Post" component={() => { return <Post id={id} /> }} />
        <Route path="/Admin" component={Admin} />
        <Route path='/postBlog' component={() => { return <PostBlog id={id} /> }} />
        <Route path="/AdminBlog" exact component={AdminBlog} />
        <Route path="/SigIn" component={() => <Account id={id} setId={setId} />} />
        <Route path="/cart" component={() => { return <Cart id={id} /> }} />
        <Route path="/UserAccount" component={() => <UserAccount id={id} />} />
        <Route path="/blog" component={() => <Blogs blog={blog} setBlog={setBlog} />} />
        <Route path="/oneblog" component={() => <OneBlog blog={blog} />} />
        <Route path="/viewPost" component={() => <ViewPost id={id} />} />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
