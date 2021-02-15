import React, { Component } from 'react';
import Post from './Posts/Posts'

import './Blog.css';
//import axios from 'axios';
import axios from '../../axios'; // instance axios viyenebt. saxeli sheidzleba iyo mag axiosinstance

class Blog extends Component {
 
    render () {



        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li> <a href="/">Home</a> </li>
                            <li> <a href="/new-post">New Post</a> </li>
                        </ul>
                    </nav>
                </header>
                <Post></Post>

            </div>
        );
    }
}

export default Blog;