import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: { firstName: 'Aashutosh', lastName: 'Karande' }
    }
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi {this.state.name.firstName} {this.state.name.lastName} </p>
          <button onClick={() => {
            this.setState((state, props) => {
              return {
                name: { firstName: 'Spk' }
              }
            }, () => {
              console.log(this.state)
            })
          }}
          >Change Name</button>
        </header>
      </div >
    );
  };
};

// function App() {
//   return (
//     <div className="App" >
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello my name is Aashu12345
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
