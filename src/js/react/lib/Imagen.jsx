import React from 'react';
import ReactDOM from 'react-dom';
class Imagen extends React.Component {
	render(){
		return <img src={ this.props.src } width={ this.props.width } />
	}
}
$(function(){
	ReactDOM.render(<div><Imagen src="img/logotipo.svg" width="800px"  /><Imagen src="img/logotipo.svg" width="100px"  /></div>, document.getElementById('webApp'));
});