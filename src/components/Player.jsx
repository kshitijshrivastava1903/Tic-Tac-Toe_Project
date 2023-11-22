import {useState} from 'react';

export default function Player({intialName, symbol,isActive}){

    function handleEditingButtonClick(){
        setIsEditing((isEditing)=>!isEditing);
    }

    function handleChange(event){

        console.log(event);

        setPlayerName(event.target.value);
    }

    const [playerName, setPlayerName] = useState(intialName);

    const [isEditing, setIsEditing] = useState(false);

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit';
    if(isEditing){
        editablePlayerName = <input type="text"  required value={playerName} onChange={handleChange}/> 
        btnCaption='Save'
    }

    return (
<li className={isActive?"active":undefined}>
          <span className="player" >
         {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditingButtonClick}>{btnCaption}</button>
          </li>
    );

}