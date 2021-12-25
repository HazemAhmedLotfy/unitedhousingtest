import React from 'react';

export default class StockSection extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <div id='stockSection'>
                <div className='container'>
                    <div className='stockInfo d-flex align-items-center'>
                        <div className='stockTitle'>
                            <img src="/assets/images/whitelogo.png" />
                            <h1><span></span>stock</h1>
                        </div>

                        <div className='separator'></div>

                        <div className='stockValue'>
                            <i className='icon-stock'></i>
                            <span>7.2</span>
                            <span>%</span>
                        </div>
                    </div>
                </div>

                <div className='socialMediaLinks'>
                    <a href="#"><i className='icon-facbeook'></i></a>
                    <span></span>
                    <a href="#"><i className='icon-linked'></i></a>
                    <span></span>
                    <a href="#"><i className='icon-Instagram'></i></a>
                </div>
            </div>
        )
    }

}