import React from 'react';
import ReactDOM from 'react-dom';
/*----------  Class Ficha  ----------*/
class Ficha extends React.Component{
	constructor (props){
		super(props);

	}
	componentDidMount(){
		//setMap(id,info); 
		//alert({this.props.idmap});
		//console.log({this.props.idmap});
		var object = {this}
		var mapId = object.this.props.idmap;
		var lat = object.this.props.lat;
		var lng = object.this.props.lng;
		
		setTimeout(function(){ 
			setMap(mapId,'es info',lat,lng);
			window.timeLoad+=window.delay;
			console.log("-----------------"+window.timeLoad);
		 }, window.timeLoad);

	}
	render(){
		return (
				<div className="columns small-12 medium-6 large-4 xlarge-3">
					<div className="espaciado">
						<div className="contenido-ficha">

							{/*----------  Imagen  ----------*/}

							<img className="fakeimg" src={this.props.img} />

							{/*----------  Info Ficha  ----------*/}
							
							<div className="informacionFicha">
								<h1 className="nombre fuente1">{this.props.name}</h1>
								
									<i className="fa fa-envelope fa-2x" aria-hidden="true" data-link={"mailto:"+this.props.email}></i>
									<i className="fa fa-external-link fa-2x" aria-hidden="true" data-link={this.props.site}></i>
									<i className="fa fa-whatsapp fa-2x" aria-hidden="true" data-link={this.props.phone}></i>

								<h2>Dirección</h2>
									<span>{this.props.street}</span>
									<span>{this.props.city}</span>
									{/* 
										<span>LAT LANG</span>
											<span>{this.props.lat}</span>
											<span>{this.props.lng}</span>
										<div id={this.props.idmap} className="map">es</div>
									*/}
								<span>{this.props.rating}</span>
								<div className="rating">
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
								</div>
								<img className="mapaPreview ra"  width="150" src={"https://maps.googleapis.com/maps/api/staticmap?center="+this.props.lat+","+this.props.lng+"&zoom=14&scale=1&size=150x150&maptype=terrain&format=png&visual_refresh=true&&key=AIzaSyAKlZh-yaEKVySjN3g9hb94PF-I-7xroFU"} alt="Google Map of Albany, NY" />
							</div>
						</div>
					</div>
				</div>
			)
	}
}
export default  Ficha;