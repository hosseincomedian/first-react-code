import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "num: "
    }
  }

  render() {
    return (
      <div>
        <Hello title = {this.state.title}/>
        <Timer />
      </div>
    )
  }
}

root.render(<App />);


// const tick = () => {
// }

// setInterval (()=> tick(), 1000);

