/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sample from '../../Image/sample3.jpg'
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-left banner-info">
                    <img src={sample} />
                </div>
                <div className="banner-right banner-info">
                    <h2>This is Banner</h2>
                    <br />
                    <p>This is banner description and Link</p>
                    <button className="banner-button"><Link to={'/shop'}>Shop Now</Link></button>
                </div>
            </div>
        );
    }
}

export default Banner;