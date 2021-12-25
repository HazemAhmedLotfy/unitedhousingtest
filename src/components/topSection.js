import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default class TopSection extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            options: {
                loop: true,
                margin: 0,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
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
		

		const url = "http://"+urlHost+"Announcements";
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
        var annItem = this.state.items.map((i)=>{
            return(
                <div className='bannerItem' key={i.id}>
                    <div className='bannerImage'>
                        <img src={"http://3.138.198.198:8055/assets/"+i.Image} />
                    </div>

                    <div className='bannerInfoCont '>
                        <div className='container'>
                            <div className='bannerInfo'>
                                <h1>{i.Subtitle}</h1>
                                <h2>{i.Title}</h2>
                                <Link to={i.Link}>View Project <i className='icon-arrow-down-right2'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

            )
        });

        return(
            <div id='bannerSection'>
                {(!this.state.items || this.state.items.length == 0)
                    ? <h1>hello</h1>
                    : (
                        <OwlCarousel  
                        className="resSlider projectSlider owl-theme"  
                        {...this.state.options}>  
                        {annItem}
                        
                    </OwlCarousel>
                    )
                }
                
            </div>
        )
    }

}