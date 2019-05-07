import React from 'react';

const Button = ({className, buttonName, onClick}) => (
	<div>
    	<button onClick={ onClick } className={ className } >{buttonName}</button>
	</div>
);

export default Button;
