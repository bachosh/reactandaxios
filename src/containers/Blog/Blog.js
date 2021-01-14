import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios'; // instance axios viyenebt. saxeli sheidzleba iyo mag axiosinstance

class Blog extends Component {
   state = {
        posts: [],
        SelectedPostId: null,
        error: false
   }     

//  immediately aris life cycle componenti rashic http request davamatet    
    componentDidMount () {
      // axios aris javascriptis biblioteka http requestistvis
      // radgan javascripti asinqronuliao, anu ar daelodeba axios.get is shesrulebas da gaagrdzelebs semdeg brdzanebebs 
      // amitom viyenebt promices rogoricaa "then". marto then is shignit imushavebs response i 
      // response axios sisaa  
      axios.get('/posts')
       .then(response => {
          const posts = response.data.slice(0,4) // mxolod pirvel 4 chanawers vigebt
          const updatedposts = posts.map(
            posts => {
                return {
                    ...posts,
                    author: 'bacho'
                }
            }
          );
          this.setState({posts: updatedposts});
          //console.log(response);
       })
       .catch(error => {
         //console.log(error);  
         this.setState({error: true});
       });
    }

    postSelectedHandler = (id) => {
        this.setState({SelectedPostId: id});
        //console.log('postSelectedHandler (id) = ' + id);
    }

    render () {

        let posts = <p style = {{textAlign: 'center'}}>somthing went wrong !</p> 
        if (!this.state.error) {
         posts = this.state.posts.map(
            posts => {
                return <Post 
                          key = {posts.id} 
                          title = {posts.title } 
                          author = {posts.author }
                          clicked = {() => this.postSelectedHandler(posts.id)}
                       />;
            }
        );
        }

        return (
            <div>
                <section className="Posts">
                 {posts}
                </section>
                <section>
                    <FullPost id={this.state.SelectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;