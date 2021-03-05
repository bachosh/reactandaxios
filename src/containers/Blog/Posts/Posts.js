
import React, { Component } from 'react';
import axios from '../../../axios';
import {Route,Link} from 'react-router-dom'; 

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css'


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
    //console.log(this.props);
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
            //this.setState({SelectedPostId: id});
            //console.log('postSelectedHandler (id) = ' + id);
            //this.props.history.push({pathname: '/posts/' + id});   // alternatiuli navigaciis varianti 1
            this.props.history.push('/posts/' + id );                  // alternatiuli navigaciis varianti 2
        }

  render () {   
                let posts = <p style = {{textAlign: 'center'}}>somthing went wrong !</p> 
                if (!this.state.error) {
                    posts = this.state.posts.map(
                        posts => {  //link is gamo key elementi amovitanet gare elementshi
                            return (
                                    <Link to={'/posts/' + posts.id} key = {posts.id} >  
                                        <Post 
                                            title = {posts.title } 
                                            author = {posts.author }
                                            // clicked = {() => this.postSelectedHandler(posts.id)}
                                        />
                                </Link>
                                //meore variantia programulad gavaketot navigacia postSelectedHandler am metodshi
                                //    <Post 
                                //     title = {posts.title } 
                                //     author = {posts.author }
                                //     clicked = {() => this.postSelectedHandler(posts.id)}
                                //    />                              
                                );
                        }
                    );
                }

                return (
                    <div>
                        <section className="Posts">
                            {posts}
                        </section>
                        {/* nested routes */ }
                        <Route path={this.props.match.url + "/:id"} exact component = {FullPost} /> 
                    </div>
                );
            } //end render ()
} /// end class Posts


export default Posts;


