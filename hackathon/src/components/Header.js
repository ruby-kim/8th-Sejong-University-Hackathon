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
                <div className="menu">
                    <Link to="/"><div className="menu-item">홈</div></Link>
                    <Link to="/professor"><div className="menu-item">교수</div></Link>
                    <Link to="/student"><div className="menu-item">학생</div></Link>
                </div>
            </div>
        );
    }
} 
export default Header;
