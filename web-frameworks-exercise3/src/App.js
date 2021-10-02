import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import AdminView from './components/AdminView';
import Header from './components/Header';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
      selectedConsole: ""
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  onDropDownChange = (event) => {
    console.log("Chosen console: " + event.target.value);
    this.setState({ selectedConsole: event.target.value });
  }

  addNewGame = (name, developer, publisher, console, genre, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      developer: developer,
      publisher: publisher,
      console: console,
      genre: genre,
      price: price
    });
    
    this.setState({
      items: newItems
    });
  }
  

  deleteGame = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let websiteView =
      <>
        <div>
          Search <input genre="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString } size="27"/> 
        </div>
        <label for="console-select">Choose console:&nbsp;</label>
        <select id="console-select" onChange= { this.onDropDownChange }>
          <option value="">--Choose an option--</option>
          <option value="Playstation 4">Playstation 4</option>
          <option value="Xbox One">Xbox One</option>
        </select>
        <SearchView
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()) && item.console.includes(this.state.selectedConsole)) }
          />
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
      </>


    if(this.state.adminModeActive) {
      websiteView = 
      <AdminView
        disableAdminMode={() => this.setState({adminModeActive: false}) }
        addNewGame={ this.addNewGame }
        items={ this.state.items }
        deleteGame={ this.deleteGame }
      />;
    }



    return (
      <>
        <Header />
        { websiteView }
      </>
    )
  }
}

export default App;