import React from 'react';
import BreadCrumb from '../shared/BreadCrumb';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            breadTitle: 'Our Projects',
            itmTitle: 'United housing and development Projects.'
        };
	}

    componentDidMount() {
		this.apiCall();
	}

    apiCall(){
		let urlHost = '3.138.198.198:8055/items/';
		

		const url = "http://"+urlHost+"Projects";
        let requestheaders = new Headers();
        requestheaders.append('Content-Type', 'application/json')
        requestheaders.append("accept", "application/json")
 
        const requestOptions = {
            method: 'GET',
            headers: requestheaders,
        };
		
        fetch(url, requestOptions).then((response) => response.json())
		.then(result => {
			this.setState({
                items: result.data,
            })
		})
	}

    render() {
        var projectItem = this.state.items.map((i)=>{
            return(
                <div className='col-4' key={i.id}>
                    <div className="projectItem">
                        <div className="projectImg">
                            <img src={"http://3.138.198.198:8055/assets/"+i.Image} />
                        </div>
                        <div className="projectData">
                            <h1>{i.Title}</h1>
                            <Link to={"/project-details?id="+i.id}>View Project <i className='icon-arrow-down-right2'></i></Link>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className='innerPage'>
                <BreadCrumb
                 title={this.state.breadTitle}
                 itmTitle={this.state.itmTitle}></BreadCrumb>


                <div id='Projects'>
                    <div className='container'>
                        <div className='row'>
                            {projectItem}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}