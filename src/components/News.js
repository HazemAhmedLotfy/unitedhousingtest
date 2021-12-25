import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

import moment from 'moment';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


export default class News extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    componentDidMount() {
		this.apiCall();
	}

    apiCall(){
		let urlHost = '3.138.198.198:8055/items/';
		

		const url = "http://"+urlHost+"News";
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
        var newsItem = this.state.items.map((i)=>{
            return(
                <div className='col-4' key={i.id}>
                    <Link className='newItem' to={"/news-details?id="+i.id}>
                        <div className='newImg'>
                            <img src={"http://3.138.198.198:8055/assets/"+i.Image} />
                        </div>
                        <div className='newInfo'>
                            <span className='newDate'>{moment(i.date_created).format('DD MMM')}</span>
                            <span className='newTxt'>
                                <h1>{i.Title}</h1>
                                <p>
                                    {i.Brief.substring(0, 150) }
                                    { i.Brief.length >= 150 && `...` }
                                </p>
                            </span>
                        </div>
                    </Link>
                </div>
            )
        });

        return(
            <div id='News'>
                <div className='container'>
                    <div className='sectionTitle'>
                        <h1><span></span>Our News</h1>
                        <h2>We post often to our news to keep you updated.</h2>
                    </div>

                    <div className='row newContainer'>
                        {newsItem}
                    </div>
                </div>
            </div>
        )
    }

}