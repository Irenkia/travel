import React from 'react';
import { Link } from 'react-router-dom';

const Button =({value}) =>{
    return ( 
        <Link to='sign-up'>
        <button className='btn'>{value}</button>
        </Link>
     );
}

export default Button;