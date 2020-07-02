import React from 'react';
import Example from '../../components/Example';
import { Link } from 'react-router-dom';
import axios from 'axios';


const StudentHome = () => {
    return (
        <div>
            <Example>학생페이지</Example>
            
            <Link to="/exam">워터마크하기</Link>
        </div>
    );
};

export default StudentHome;