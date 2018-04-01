import React from 'react';

const Button = ({className, buttonName, onClick}) => (
	<div>
    	<button onClick={ onClick } style={{margin: 5}} className={ className } >{buttonName}</button>
	</div>
);

export default Button;
