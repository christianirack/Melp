import React from 'react';
import ReactDOM from 'react-dom';
/*----------  Class Ficha  ----------*/
class Ficha extends React.Component{
	constructor (props){
		super(props);
		this.state = { url: 'nose '};
		 this.handleClick = this.handleClick.bind(this)
		/*
		this.state = { ecualizar:'data-equalizer' }
		if(window.global==1){
			this.setState({ ecualizar:'data-equalizer' });
			window.global++;

		}
		*/
	}

	componentDidMount(){
		//setMap(id,info); 
		//alert({this.props.idmap});
		//console.log({this.props.idmap});
		/*
		var object = {this}
		var mapId = object.this.props.idmap;
		var lat = object.this.props.lat;
		var lng = object.this.props.lng;
		*/
		var object = {this}

		setTimeout(() => {
			var ficha = 'ficha_'+object.this.props.idmap;
			$('[data-ficha='+ficha+']').css('opacity','1');
			//console.log(ficha);
		},  window.delayFC());

		

	}
	 handleClick(e){
	 	//var object = {this}
		//var click = "fichaurl"+object.this.props.idmap;
		var link =e.currentTarget.getAttribute('data-link');
		window.open(link);

	}
	render(){
		return (
				<div className="columns small-12 medium-6 large-4 xlarge-3 ficha-oculta" data-ficha={"ficha_"+this.props.idmap} >
					<div className="espaciado">
						<div className="contenido-ficha">

							{/*----------  Imagen  ----------*/}
							
							<img className="fakeimg" src={this.props.img} />

							{/*----------  Info Ficha  ----------*/}
							
							<div className="informacionFicha" data-equalizer-watch>
								<h1 className="nombre fuente1">{this.props.name}</h1>

								<div className="rating">
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
									<i className={"fa fa-star fa-2x star"+this.props.rating} aria-hidden="true"></i>
								</div>
								<span>{this.props.street}</span>, <span>{this.props.state}</span>.<br/>
								<a href={this.props.site} target="_blank"><span>{this.props.site} </span></a>
									<div className="iconos-contacto">
										<a href={"mailto:"+this.props.email}><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
										<a href={this.props.site} target="_blank"><i className="fa fa-external-link fa-2x" aria-hidden="true"></i></a>
										<a href={"tel:+"+this.props.phone}><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
										
									</div>
									{/* 
										<span>LAT LANG</span>
											<span>{this.props.lat}</span>
											<span>{this.props.lng}</span>
										<div id={this.props.idmap} className="map">es</div>
									*/}
									<a href={'https://www.google.com/maps/place/'+this.props.lat+','+this.props.lng} target="_blank">
										<img className="mapaPreview hide-for-small-only"  width="150" src={"https://maps.googleapis.com/maps/api/staticmap?center="+this.props.lat+","+this.props.lng+"&zoom=14&scale=1&size=200x200&maptype=terrain&format=png&visual_refresh=true&&key=AIzaSyAKlZh-yaEKVySjN3g9hb94PF-I-7xroFU"} alt="Google Map of Albany, NY" />
									</a>
							</div>
						</div>
					</div>
				</div>
			)
	}
}
export default  Ficha;