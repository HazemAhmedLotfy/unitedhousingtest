import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            options: {
                loop: true,
                margin: 0,
                nav: true,
                navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 4,
                    },
                },
            },
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
                <div className='item' key={i.id}>
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
            <div id='Portfolio'>
                <div className='container'>
                    <div className='sectionTitle'>
                        <h1><span></span>What we do</h1>
                        <h2>Helping you find the property of your dreams.</h2>
                    </div>
                </div>
                {(!this.state.items || this.state.items.length == 0)
                    ? <h1>hello</h1>
                    : (
                        <OwlCarousel  
                        className="resSlider projectSlider owl-theme"  
                        {...this.state.options}>  
                        {projectItem}
                        
                    </OwlCarousel>
                    )
                }
               

                <div className='viewAll'>
                    <div className='container'>
                        <a href='#'>Browse all our projects…</a>
                    </div>
                </div>
            </div>
        )
    }

}