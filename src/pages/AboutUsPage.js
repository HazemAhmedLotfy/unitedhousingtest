import React from 'react';
import BreadCrumb from '../shared/BreadCrumb';
import AboutUs from '../components/AboutUs';


export default class AboutUsPage extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            breadTitle: 'About Us',
            itmTitle: 'One of the oldest companies operating in the real estate sector.'
        };
	}

    componentDidMount() {
		this.apiCall();
	}

    apiCall(){
		let urlHost = '3.138.198.198:8055/items/';
		

		const url = "http://"+urlHost+"AboutUs";
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
                aboutTitle: result.data.Title,
                aboutDesc: result.data.Description,
                aboutImg: result.data.Image
            })
		})
	}

    render() {
        return(
            <div className='innerPage'>
                <BreadCrumb
                 title={this.state.breadTitle}
                 itmTitle={this.state.itmTitle}></BreadCrumb>


                <div id='AboutUs'>
                    <div className='container'>
                        <div className='row storyAbout'>
                            <div className='col-7 d-flex align-items-center'>
                                <div className='storyTxt'>
                                    <div className='sectionTitle'>
                                            <h1><span></span>The story</h1>
                                            <h2 className='w-100'>{this.state.aboutTitle}</h2>
                                        </div>

                                        <p>
                                            {this.state.aboutDesc}
                                        </p>
                                    </div>
                                    
                            </div>

                            <div className='col-6 storyImgCont'>
                                <div className='storyImg'>
                                    <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg}/>
                                </div>
                                    
                            </div>
                        </div>

                        
                    </div>
                    
                    <AboutUs></AboutUs>

                </div>
            </div>
            
        )
    }

}