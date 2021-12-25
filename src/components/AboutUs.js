import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AboutUs extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            imgChecker: 'img1',
        };

        this.myChangeHandler = this.myChangeHandler.bind(this);
	}

    componentDidMount() {
		this.apiCall();
	}

    apiCall(){
		let urlHost = '3.138.198.198:8055/items/';
		

		const url = "http://"+urlHost+"HistoricalAssets";
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
                aboutSub: result.data.Subtitle,
                aboutDesc: result.data.Description,
                aboutImg1: result.data.Image1,
                aboutImg2: result.data.Image2,
                aboutImg3: result.data.Image3,
            })
		})
	}

    myChangeHandler(e) {
        const id = e.target.name;
        this.setState({
			imgChecker: id,
		})
      }

    render() {
        return(
            <div id='AboutUs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='mainImg'>
                                {(this.state.imgChecker == 'img1')
                                 ? <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg1} />
                                 : (this.state.imgChecker == 'img2')
                                 ? <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg2} />
                                 : <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg3} />
                                }
                            </div>
                            <div className='thumbnailsImgs'>
                                <button className='imgItem' name="img1" onClick={this.myChangeHandler}>
                                    <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg1} />
                                </button>
                                <button className='imgItem' name="img2" onClick={this.myChangeHandler}>
                                    <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg2} />
                                </button>
                                <button className='imgItem' name="img3" onClick={this.myChangeHandler}>
                                    <img src={"http://3.138.198.198:8055/assets/"+this.state.aboutImg3} />
                                </button>
                            </div>
                        </div>


                        <div className='col-6 d-flex flex-direction-column align-items-center'>
                            <div className='aboutInfo'>
                                <div className='sectionTitle'>
                                    <h1><span></span>{this.state.aboutSub}</h1>
                                    <h2>{this.state.aboutTitle}</h2>
                                </div>

                                <p>
                                    {this.state.aboutDesc}
                                </p>

                                <a href="#" className='viewBtn'>Browse our historical projects <i className='icon-arrow-down-right2'></i></a>

                            </div>
                            

                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}