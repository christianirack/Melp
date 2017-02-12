import React from 'react';
import ReactDOM from 'react-dom';

var info = [
	{id:1, name:'hola'},
	{id:2, name:'hola'},
	{id:3, name:'hola'},
	{id:4, name:'hola'},
]




class Imagen extends React.Component {
	constructor(props){
		super(props);
		this.state = {nombre: 'Silvia'};
		this.unclick = this.unclick.bind(this);
	}
	componentDidMount(){
		//alert(1);
	}
	componentWillUnmount(){

	}
	unclick(event){
		//alert(event);
		this.setState({nombre:'Chris'});
	}
	render(){
		var url = "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg";
		var info2 = info[2];
		var date = new Date();
		var cache = date.getTime();
		return	<div id="logotipo" onClick={this.unclick}>
			<div className="particula particula1" />
			<div className="particula particula2" />
			<div className="particula particula3" />
			<div className="particula particula4" />
			<img src={ this.props.src+'?cache='+cache } width={ this.props.width } id="imagen-logo" />
			<div>{info2.id} - { this.props.name } {this.state.nombre}</div>

		</div>
	}
}
$(function(){
	ReactDOM.render(<div><Imagen src="img/logotipo.svg" width="300px" name="Mi nombre"   /></div>, document.getElementById('imgLogo'));
});