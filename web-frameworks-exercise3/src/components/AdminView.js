import React, { useState } from 'react'

export default function AdminView(props) {

  const [newGameName, addGameName] = useState("");
  const [newGameDeveloper, addGameDeveloper] = useState("");
  const [newGamePublisher, addGamePublisher] = useState("");
  const [newGameConsole, addGameConsole] = useState("");
  const [newGameGenre, addGameGenre] = useState("");
  const [newGamePrice, addGamePrice] = useState("");

  const addNewGame = () => {
    props.addNewGame(newGameName, newGameDeveloper, newGamePublisher, newGameConsole, newGameGenre, newGamePrice);
  }

  const deleteGameClick = (itemId) => {
    console.log("Item " + itemId + " deleted");
    props.deleteGame(itemId);
  }

  return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            Name <input type="text" onChange={ (event) => addGameName(event.target.value) } />
          </div>
          <div>
            Developer <input type="text" onChange={ (event) => addGameDeveloper(event.target.value) } />
          </div>
          <div>
            Publisher <input type="text" onChange={ (event) => addGamePublisher(event.target.value) } />
          </div>
          <div>
            Console <input type="text" onChange={ (event) => addGameConsole(event.target.value) } />
          </div>
          <div>
            Type <input type="text" onChange={ (event) => addGameGenre(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => addGamePrice(event.target.value) } />
          </div>
          <button onClick={ addNewGame }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of items</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => deleteGameClick(item.id)}>X</button> {item.name}, {item.developer}, {item.publisher}, {item.console}, {item.genre}, {item.price}
          </div>)}
    </div>
  )
}
