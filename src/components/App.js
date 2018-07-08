import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
	  super(props);
	  
	  this.state={repos: []};
  }
  
  componentDidMount() {
	  fetch('https://api.github.com/users/aptDroid/repos', {
		  method: 'GET',
	  }).then(result => result.json())
	  .catch(error => console.erro('ERROR:', error))
  .then(response => {
		let getRepos = response.map((repo, index) => <li key={index}>{repo.name}</li>);
		this.setState({
			repos: getRepos
			});
		}
	)
  }
  
  render() {
    return (
      <div id="cont">
        <h1 className="xyz">My React App!</h1>
		{this.state.repos}
      </div>
    );
  }
}

export default App;
