import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    제8회 세종대학교 SWㆍAI Hackathon_소웨지존
                </div>
            </div>
        );
    }
} 
export default Header;
