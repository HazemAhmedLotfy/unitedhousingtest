import { throws } from 'assert';
import React from 'react';

import BreadCrumb from '../shared/BreadCrumb';

export default class NewsDetails extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            breadTitle: 'Our News',
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
            result.data.filter((i) => {return i.id === this.state.itemId})
            .map((i)=>{
                this.setState({
                    itemDate: i.date_created,
                    itmTitle: i.Title,
                    desc: i.Description,
                    itemImage: i.Image,
                })
            })
			
		})
	}

    render() {
        return(
            <div className='innerPage'>

                <BreadCrumb
                 title={this.state.breadTitle}
                 itmTitle={this.state.itmTitle}
                 itmDate={this.state.itemDate}></BreadCrumb>


                <div id='NewsDetails'>
                    <div className='container'>
                        <div className='' dangerouslySetInnerHTML={{ __html: this.state.desc }} />
                    </div>
                </div>
            </div>
            
        )
    }

}