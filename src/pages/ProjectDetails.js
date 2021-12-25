import { throws } from 'assert';
import React from 'react';

import BreadCrumb from '../shared/BreadCrumb';

export default class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            itemId: '',
            items: [],
            breadTitle: 'Our Projects',
            itmTitle: '',
        };
	}

    componentDidMount() {
		this.getIdFromUrl();
	}

    getIdFromUrl(){
		let urlHostId = window.location.href;
		let urlHost = window.location.host;
		let ids = urlHostId.split("=");
		let id = ids[ids.length - 1];
		this.setState({
			itemId: Number(id)
		},()=>{
            this.apiCall();
        })
    
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
            result.data.filter((i) => {return i.id === this.state.itemId})
            .map((i)=>{
                this.setState({
                    itemType: i.Type,
                    itmTitle: i.Title,
                    location: i.Location,
                    desc: i.Description,
                    features: i.features,

                })
            })
			
		})
	}

    render() {
        return(
            <div className='innerPage'>

                <BreadCrumb
                 title={this.state.itemType}
                 itmTitle={this.state.itmTitle}></BreadCrumb>


                <div id='NewsDetails'>
                    <div className='container'>
                        <p>
                            {this.state.desc}
                        </p>

                        <div className='projectConsist'>
                            <p>The project consists of</p>
                            <div className='projectFeatures' dangerouslySetInnerHTML={{ __html: this.state.features }} />
                            
                        </div>

                        
                    </div>

                    <div className='salesCall'>
                        <div className='container'>
                            <span>
                                Reserve the right of first choice to live in 
                                a distinctively designed building, with amazing views.
                            </span>
                            <button>Contact our Sales Team<i className='icon-arrow'></i></button>
                        </div>
                    </div>

                    <div className='projectLocation'>
                        <div className='container'>
                            <h1>Project Adress</h1>
                            <h2>9 st Abdelfattah Mohamed, 6 of october, Giza - Egypt.</h2>
                            <iframe src={this.state.location} loading="lazy"></iframe>
                        </div>
                        </div>


                </div>
            </div>
            
        )
    }

}