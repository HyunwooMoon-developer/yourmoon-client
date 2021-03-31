/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ItemContext from '../../Context/ItemContext';
import sample from '../../Image/sample3.jpg';
import ItemApiService from '../../Service/Item-api-service';
import './ItemDetail.css';

class ItemDetail extends Component {
    static defaultProps = {
        match : {
            params : {},
        }
    }
    
    static contextType = ItemContext;
    

    componentDidMount(){
        const {itemId} = this.props.match.params
        console.log(itemId);
        ItemApiService.getItem(itemId)
        .then(this.context.setItem)
        .catch(this.context.setError)
    }

    render() {
       const {item} = this.props;
        return (
            <div className="item-main">
          <div className="item-left">
            <div className="item-image-main">
              <img src={sample} />
            </div>
            <div className="item-image-select">
              <button>
                <img src={sample} />
              </button>
              {' '}
              <button>
                <img src={sample} />
              </button>
              {' '}
              <button>
                <img src={sample} />
              </button>
              {' '}
              <button>
                <img src={sample} />
              </button>
            </div>
          </div>
          <div className="item-right">
            <h2>Item 1</h2>
            <h3>$ 30.00</h3>
            <form className="select-item">
              <label htmlFor="select-color">Color : </label>
              <select className="select-color">
                <option value="null">-</option>
                <option value="red">Red</option>
                <option value="White">White</option>
              </select>
              <br />
              <label htmlFor="select-scent">Scent : </label>
              <select className="select-scent">
                <option value="null">-</option>
                <option value="lavendar">Lavendar</option>
                <option value="Mint">Mint</option>
              </select>
              <br />
              <label htmlFor="select-qty">Qty : </label>
              <select className="select-qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <br />
              <button>Add to Cart</button>
            </form>
            <h3>Description</h3>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          </div>
        </div>
        );
    }
}

export default ItemDetail;