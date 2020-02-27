import React from 'react';
import './index.css';
import { IPeople } from '..';

interface IProps{
	person: IPeople;
}

function Person (props: IProps) {
	return (
		<div className="App">
			<form className="form">
					<div className="line">
							<h1 id="name">{props.person.name}</h1>
							<label>Phone:<div  id="phone" className="label">{props.person.phone}</div><br></br></label>
							<label>E-mail:<div id="email" className="label">{props.person.email}</div><br></br></label>
							<label>City:<div id="address" className="label">{props.person.address.city}</div><br></br></label>
							<label>Street:<div id="street" className="label">{props.person.address.street}</div><br></br></label>
							<label>Website:<div id="city" className="label">{props.person.website}</div><br></br></label>
					</div>
			</form>
		</div>
  )
}	

export default Person;