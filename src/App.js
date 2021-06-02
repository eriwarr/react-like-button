import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfTimesClicked: 1,
    }
    this.countClicks = this.countClicks.bind(this);
    }

  countClicks(event){
   this.setState({numberOfTimesClicked: this.state.numberOfTimesClicked + 1 })
   if(this.state.numberOfTimesClicked === 1) {
     event.target.innerHTML = `${this.state.numberOfTimesClicked} like`;
   } else {
     event.target.innerHTML = `${this.state.numberOfTimesClicked} likes`;
   }

  }

  render() {
    return (
        <div className="App-header">
        <button className="Button" onClick={this.countClicks}> 0 likes</button>
        </div>
    )
  }
}

export default App;
