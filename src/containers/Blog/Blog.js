import React, { Component } from 'react';
import Posts from './Posts/Posts'

import NewPost from './NewPost/NewPost'
//import {Route,Link} from 'react-router-dom';  // aq Link nishnavs rom shegvidzlia gverdi tavidan chatvirtvis nacvlad gadavidet linkze
import {Route,NavLink,Switch, Redirect} from 'react-router-dom'; // linkis navarocheni varianti damatebiti funqciebiT. className daamata link obieqts
import './Blog.css';
//import axios from 'axios';
//import axios from '../../axios'; // instance axios viyenebt. saxeli sheidzleba iyo mag axiosinstance

class Blog extends Component {
    state = {
        auth: true
    }
 
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            {/* <li> <a href="/">Home</a> </li>
                                <li> <a href="/new-post">New Post</a> </li> */}
                            <li> <NavLink  
                                    to="/posts/" 
                                    exact
                                    activeClassName="active" // aq xelit shegidzlia miutito active clasis saxeli. defaulti aris mititebuli axla zedmetead
                                    activeStyle={{ // damatebiT xelitac shegidzliamiutito inline styling// NavLink gvadzlevs am kvelafris sashualebas
                                                   color: '#fa923f',
                                                   textDecoration: 'underline'
                                                 }}
                                 > Posts</NavLink> 
                            </li>
                            <li> <NavLink to= {{
                                            pathname: '/new-post', // obsoute path
                                            //pathname: this.props.match.url + '/new-post', // relative path
                                            hash: '#submit',
                                            search: '?quick-submit=true'
                                           }}>
                                New Post </NavLink> 
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/posts" exact render = {() => <h1>Home (exatc = true roca aris zustad gadadis "/" am misamarTze </h1>}/>
                <Route path="/posts" exact = {false} render = {() => <h1>Home 2 Without Exact roca false mashim "/" amit rac iwyeba yvelas xsnis</h1>}/>  */}

                <Switch> {/* switch nishnavs rom pirvelive route romelic daemtxveva is aigis da sxvebi ar chatvirtos */}
                    { this.state.auth ? <Route path="/new-post"  component = {NewPost} /> : null };
                    <Route path="/posts" component = {Posts} />
                    <Route render = {() => <h1>Not Found</h1>} /> 
                    {/* <Route path="/posts/:id" exact component = {FullPost} />  nested routis gamo gaavitaneT  */}
                    {/* <Redirect from="/" to="/posts"/>  rodesac swith shi iyeneb mashin shegidzlia miutito to=  */}
                </Switch>
            </div>
        );
    } // end render
} //end class Blog 

export default Blog;