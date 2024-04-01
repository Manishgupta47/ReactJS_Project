import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  

  return (
    <PostListProvider>
    <div classNameName="app-container">
    <Sidebar selectedTab= {selectedTab}  setSelectedTab ={setSelectedTab}></Sidebar>
    <div classNameName= "content">
    <Header></Header>
    <Outlet/>
     <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
