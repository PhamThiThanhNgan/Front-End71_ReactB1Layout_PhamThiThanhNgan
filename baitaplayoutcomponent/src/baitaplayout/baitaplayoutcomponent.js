import React, { Component } from 'react';
import "./baitaplayoutcomponent.css";
import Header from './header';
import Body from './body';
import Footer from './footer';
class Baitaplayoutcomponent extends Component {
    render() {
        return (
            <div>
               <div>
                   <Header/>
                   <Body/>
                   <Footer/>
               </div>
            </div>
        );
    }
}

export default Baitaplayoutcomponent;