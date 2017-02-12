import React from 'react';
import ReactDOM from 'react-dom';

/*----------  Json  ----------*/

var datos = [
	{id:1, name:'hola'},
	{id:2, name:'hola'},
	{id:3, name:'hola'},
	{id:4, name:'hola'},
];
var urlRequest = 'http://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
$.getJSON(urlRequest, function( data ) {
	console.log(data);
	/*
  var items = [];
  $.each( data, function( key, val ) {
    //items.push( "<li id='" + key + "'>" + val + "</li>" );
    console.log('ok')
  });
  */
});





/*----------  Class  ----------*/

class Ficha extends React.Component{
	constructor (props){
		super(props);
		this.state={default:''};
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return <div>
		{
			datos.map((datos)=>{
				return <h1 key={datos.id}>asi es {datos.id}</h1>
			})
		}
		</div>
	}
}
$(function(){
	ReactDOM.render(<Ficha />, document.getElementById('fichas'));
})