import React from 'react';
import moment from 'moment';

export default class BreadCrumb extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    

    render() {
        return(
            <div className='innerBreadCrumb'>
                <div className='breadImg'>
                    <img src="/assets/images/BreadCrumbs/aboutImg.png" />
                </div>

                <div className='breadCont'>
                    <div className='container'>
                        <div className='breadInfo'>
                            {!this.props.itmDate || this.props.itmDate.length == 0
                             ? null
                             : <span className='breadDate'>{moment(this.props.itmDate).format('DD MMM')}</span>
                            }
                            <div className='sectionTitle'>
                                <h1><span></span>{this.props.title}</h1>
                                <h2>{this.props.itmTitle}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        )
    }

}