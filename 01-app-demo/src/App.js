import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    // this.state = {
    //   name: { firstName: 'Aashutosh', lastName: 'Karande' }
    // }
    /*
        {
          id: 'abc123',
          name: 'Linda',
        }
    */

    this.state = {
      monsters: []
    }

    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users, fullList: users }
      },
        () => {
          console.log(this.state)
        }
      ));

    console.log('componentDidMount');
  }


  myFunction() {
    console.log('myFunction');
  }

  render() {
    console.log('render');

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          console.log(event.target.value);
          var filteredMonsters = this.state.fullList.filter((f) => {
            return f.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
          });
          this.setState(() => {
            return {
              monsters: filteredMonsters
            }
          },
            () => {
              console.log(this.state)
            }
          );


        }} />
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        <button onClick={this.myFunction}>Hi</button>
      </div>
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

/*

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

        */

export default App;
