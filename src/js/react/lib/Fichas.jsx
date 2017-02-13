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
				imgRandom = 'https://placeimg.com/300/300/nature?cache='+Math.random();
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
				<div className="columns small-12 medium-8 small-order-2">
					<div className="row expanded"  data-equalizer>
			{ 
				keys.map((keys) =>{
					//return <Ficha key={keys.key} name={keys.object.address.location.lat} />
					return <Ficha key={keys.key} idmap={"mapa"+keys.key} img={keys.img} name={keys.object.name} email={keys.object.contact.email} site={keys.object.contact.site} phone={keys.object.contact.phone} state={keys.object.address.state} street={keys.object.address.street} city={keys.object.address.city}  lat={keys.object.address.location.lat} lng={keys.object.address.location.lng} rating={keys.object.rating} />
				})
			}		</div>
				</div>

				<div className="columns small-12 medium-4 small-order-1">
					<div className="row expanded">
						<div className="columns small-12">
							<div className="row">
								<div className="columns small-12">

								<div className="login-form">
									<h1>¡Hola, de nuevo!</h1>
									<h4>Accede a tus restaurantes favoritos!</h4>
									<span>Si ya tienes una cuenta inicia sesión y si no registrate, es muy facil!</span>

									<div className="input-group login">
									  <span className="input-group-label"><i className="fa fa-user-circle-o fa-2x icono-login" aria-hidden="true"></i></span>
									  <input className="input-group-field" type="number" />
									</div>

									<div className="input-group login">
									  <span className="input-group-label"><i className="fa fa-unlock-alt fa-2x icono-login" aria-hidden="true"></i></span>
									  <input className="input-group-field" type="number" />
		
									</div>

									<div className="input-group login-buttons">
									  <div className="input-group-button">
									    <input type="submit" className="button" value="Entrar"/>
									  </div>
									  <div className="input-group-button">
									    <input type="submit" className="button" value="Registrarse"/>
									  </div>
									</div>
								</div>




								<img src="img/banner.jpg" className="hide-for-small-only" />
								</div>
							</div>
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