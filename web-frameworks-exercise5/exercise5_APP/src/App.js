import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import AdminView from './components/AdminView';
import Header from './components/Header';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      productSearchString: "",
      adminModeActive: false,
      selectedConsole: ""
    }
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
    axios.get('http://localhost:4000/products')
      .then((response) => {
        this.setState({ items: response.data.items })
      })
      .catch((err) => {
        console.log(err);
      })
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

  addNewGame = (name, developer, publisher, gconsole, genre, price, rating, image, info) => {
    console.log("In addNewGame function");
    axios.post('http://localhost:4000/products', 
      {
        name,
        developer,
        publisher,
        gconsole,
        genre,
        price,
        rating,
        image, 
        info
      }
    )
      .then(response => {
        this.setState({ items: response.data.items })
        console.log(JSON.stringify(response));
        
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteGame = itemId => {
    console.log("ItemID: " + itemId);
    axios.delete('http://localhost:4000/products/' + itemId)
      .then(response => {
        console.log(response);
        this.setState({items: this.state.items.filter(item => item.id !== itemId)})
      })
      .catch(err => console.log(err));
  }

  filteredItems = () => {
    const itemsArray = this.state.items.filter((item) => 
        item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase()) 
        && item.gconsole.includes(this.state.selectedConsole))
          return itemsArray
          
  }

  render()
  {
    console.log("Render");
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
          items={ this.filteredItems() }
          // items = { this.state.items }
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