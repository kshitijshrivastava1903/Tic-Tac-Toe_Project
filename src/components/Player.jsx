import {useState} from 'react';

export default function Player({name, symbol}){

    function handleEditingButtonClick(){
        setIsEditing(true);
    }

    const [isEditing, setIsEditing] = useState(false);

    return (
<li>
          <span className="player">
         {isEditing==true?<input type="text" />:<span className="player-name">{name}</span>}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditingButtonClick}>Edit</button>
          </li>
    );

}