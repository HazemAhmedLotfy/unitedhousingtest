import React from 'react';
import Main from './main';

import AboutUsPage from '../pages/AboutUsPage';

import ProjectList from '../pages/projectsListing';

import NewsList from '../pages/newsListing';
import NewsDetails from '../pages/NewsDetails';
import ProjectDetails from '../pages/ProjectDetails';





import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


  function Home() {
    return(
      <Main></Main>
    )
  }
  
  function About() {
    return(
        <AboutUsPage></AboutUsPage>
    )
  }
  
  function Projects() {
    return(
        <ProjectList></ProjectList>
    )
  }

  function News() {
    return(
        <NewsList></NewsList>
    )
  }

export default class Header extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <Router>
                <header className="topHeader" id="topHeader">
                    <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark">
            
                        <div className="container">
                            <div className="vMenu d-flex w-100 align-items-center">
                                <a href="#" className="logoHeader navbar-brand">
                                    <img src="./assets/images/logo.svg" alt="" />
                                </a>
            
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                                    <span className="navbar-toggler-icon"></span>
                                    <i className="icon-close"></i>
                                </button>
            
                                <div className="collapse navbar-collapse" id="main_nav">
                                
                                        <ul className="navbar-nav ms-auto menuHeader">
                                            <li className="nav-item">
                                                <Link className='nav-link' to="/">home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className='nav-link' to="/projects">Our Projects</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className='nav-link' to="/news">Our News</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className='nav-link' to="/aboutus">About us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className='nav-link contactUsLink' to="/contact"><i className="icon-mail"></i>contact us</Link>
                                            </li>
                                        </ul>

                                        
                                </div>
                                
                                
                                
                            </div>
                        
                        </div>
                    </nav>
                </header>

                <div className='mainBody'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/aboutus' element={<About/>} />
                        <Route path='/projects' element={<Projects/>} />
                        <Route path='/news' element={<News/>} />
                        <Route path='/news-details' element={<NewsDetails/>} />
                        <Route path='/project-details' element={<ProjectDetails/>} />
                    </Routes>
                </div>
            </Router>
        )
    }

}