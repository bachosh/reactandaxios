
import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Post.css'

class Posts extends Component {
    state = {
            posts: []
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
       //this.setState({error: true});
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
                    <section className="Posts">
                        {posts}
                    </section>
                );
            }
}


export default Posts;


