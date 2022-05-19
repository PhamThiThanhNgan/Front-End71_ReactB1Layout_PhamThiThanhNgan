import React, { Component } from 'react';
import "./item.css";
class Item extends Component {
    render() {
        return (
            <div className='item'>
                <div className='content'>
                    <h1 className='mt-2'>Fresh new layout</h1>
                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    <div className='icon'>
                        <i class="fab fa-algolia"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;