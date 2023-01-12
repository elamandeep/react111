import ProfileDown from "./js/Component/MenuDd/ProfileDown";
import Home from "./js/Pages/Home";
import Navbar from "./js/Utils/Navbar";
import UProfile from "./js/Pages/UProfile";
import Posts from "./js/Pages/Posts";
import Gallery from "./js/Pages/Gallery";
import Todo from "./js/Pages/Todo";
import {Routes , Route} from 'react-router-dom'
import { useEffect } from "react";
import Profile from "./js/Pages/Profile";



function App() {

    // useEffect(()=>{
    //     fetch('./js/user.json')
    // .then((response) => console.log(response.json()))
    // .then((json) => console.log(json));
    // },[])
 


    return (
        <div>
            <Routes>
                <Route path="/:id/" element={<Profile />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/user/:id" element={<UProfile />}></Route>
                <Route path="/:id/posts" element={<Posts />}></Route>
                <Route path="/:id/gallery" element={<Gallery />}></Route>
                <Route path="/:id/todo" element={<Todo />}></Route>
                <Route path="*" element={<h1>Error page</h1>}/>
            </Routes>
        </div>

        
    );
}

export default App;