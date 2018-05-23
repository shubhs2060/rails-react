class Movies extends React.Component {
  render () {
    return (
      
      <div>
      	{this.props.movies.map(function(x){
      		return(
      			<div key ={x.id}>
      				<p>Name of Movie :{x.name}</p>
      				<p>Description: {x.description}</p>
      				<hr/>
      				</div>
      			)
      	})}

      </div>
    )
  }
}


