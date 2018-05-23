class Movie extends React.Component {
  constructor(props){
  	super(props)
  	this.state = {
  		clicked: false
  	}
  }

clicker(){
	newstate= {};
	newstate["clicked"] = true;
	this.setState(newstate);

}

  render () {
  	let open = <a className= "show" onClick = {this.clicker.bind(this)}>Show</a>;
  	if(this.state.clicked){
  		open = <div>
     		 Movie is
	      <p>  {this.props.movie.name}</p>
	      <p> {this.props.movie.description}</p>
	      <p> {this.props.movie.rating}</p>
	      

      </div>
  	}
    return (
    	<div>
      {open}
      </div>
    )
  }
}


