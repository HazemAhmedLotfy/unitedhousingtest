import React from 'react';
import TopSection from '../components/topSection';
import StockSection from '../components/stock';
import Portfolio from '../components/Portfolio';
import AboutUs from '../components/AboutUs';
import News from '../components/News';

const urlApi = 'http://localhost:8055';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <div>
                <TopSection apiUrl={urlApi}></TopSection>
                <StockSection apiUrl={urlApi}></StockSection>
                <Portfolio apiUrl={urlApi}></Portfolio>
                <AboutUs apiUrl={urlApi}></AboutUs>
                <News apiUrl={urlApi}></News>
            </div>
        )
    }

}