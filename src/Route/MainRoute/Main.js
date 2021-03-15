import React, { Component } from 'react';
import Banner from '../../Component/Banner/Banner';
import FeaturedItem from '../../Component/FeaturedItem/FeaturedItem';
import NewItem from '../../Component/NewItem/NewItem';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
              <Banner />
              <div className="main-item">
                  <FeaturedItem />
                  <NewItem />
              </div>
            </div>
        );
    }
}

export default Main;