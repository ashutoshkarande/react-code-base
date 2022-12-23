import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
      monsters: [],
      searchField: ''
    }

    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }
      ));

    console.log('componentDidMount');
  }


  onSearchChange = (event) => {
    console.log(event.target.value);
    var searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField: searchField
      }
    },
      () => {
        console.log(this.state)
      }
    );


  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    var filteredMonsters = monsters.filter((f) => {
      return f.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox placeholder='search monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
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
