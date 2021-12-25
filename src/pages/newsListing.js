import { throws } from 'assert';
import React from 'react';

import moment from 'moment';

import BreadCrumb from '../shared/BreadCrumb';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


export default class NewsList extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            breadTitle: 'Our News',
            itmTitle: 'United housing and development News.'
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
            <div className='innerPage'>
                    <BreadCrumb
                    title={this.state.breadTitle}
                    itmTitle={this.state.itmTitle}></BreadCrumb>


                    <div id='NewsList'>
                        <div className='container'>
                            <div className='row'>
                                {newsItem}

                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }

}