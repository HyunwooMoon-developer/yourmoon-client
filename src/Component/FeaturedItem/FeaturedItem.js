/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sample from '../../Image/sample3.jpg'
import './FeaturedItem.css';

class FeaturedItem extends Component {
    render() {
        return (
            <div className="featured">
                <h2>Featured Item</h2>
                <div className="featured-list">
                    <Link to={'/shop/:item_id'}>
                    <div className="featured-item">
                        <img src={sample}/>
                        <h4>Item 1</h4>
                        <div className="featured-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$ 30.00</p>
                    </div>
                    </Link>
                    <Link to={'/shop/:item_id'}>
                    <div className="featured-item">
                        <img src={sample}/>
                        <h4>Item 2</h4>
                        <div className="featured-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$ 30.00</p>
                    </div>
                    </Link>
                    <Link to={'/shop/:item_id'}>
                    <div className="featured-item">
                        <img src={sample}/>
                        <h4>Item 3</h4>
                        <div className="featured-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$ 30.00</p>
                    </div>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default FeaturedItem;