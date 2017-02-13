import React from 'react';
import ReactDOM from 'react-dom';
import Ficha from './Ficha.jsx';
var mobile = false;

/*----------  Json  ----------*/

var imgRandom;
var keys = [];
function json(){

	var urlRequest = './json.php?url=http://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
	$.getJSON(urlRequest, function( dataCallback ) {
		$.each( dataCallback, function( key, val ) {
			if (isMobile.any()) {
				imgRandom = 'https://placeimg.com/250/90/nature?cache='+Math.random();
			}else{
				imgRandom = 'https://placeimg.com/400/300/nature?cache='+Math.random();
			}
			keys.push({'key':key,'img':imgRandom,'object':val})
	  	});
		renderear();
	});
}

/*----------  Generar Fichas  ----------*/

class Fichas extends React.Component{
	constructor(props){
		super(props);
		this.state={default:''};
	}

	render(){
		
		return <div className="row expanded">
				<div className="columns small-12 medium-8">
					<div className="row expanded"  data-equalizer>
			{ 
				keys.map((keys) =>{
					//return <Ficha key={keys.key} name={keys.object.address.location.lat} />
					return <Ficha key={keys.key} idmap={"mapa"+keys.key} img={keys.img} name={keys.object.name} email={keys.object.contact.email} site={keys.object.contact.site} phone={keys.object.contact.phone} state={keys.object.address.state} street={keys.object.address.street} city={keys.object.address.city}  lat={keys.object.address.location.lat} lng={keys.object.address.location.lng} rating={keys.object.rating} />
				})
			}		</div>
				</div>
				<div className="columns small-12 medium-4">
					<div className="row expanded">
						<div className="columns small-12">
						Tiendas mejor rankeadas!
						<img src="img/banner.jpg" />
						</div>
					</div>
				</div>
			</div>
	}
}



$(function(){
	 if (isMobile.any()) {
		mobile = true;
	 }
	json();
});
function renderear(){
	ReactDOM.render(<Fichas otro="ok" />, document.getElementById('fichas'));
}