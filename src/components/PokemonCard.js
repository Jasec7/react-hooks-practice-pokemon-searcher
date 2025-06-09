import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, front, back}){
  const [isFront, setIsFront] = useState(true)
  return (
    <Card>
      <div>
        <div className="image">
          <img src={isFront ? front : back} alt={name} onClick={() => setIsFront(!isFront)}
          style={{ cursor: "pointer" }}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
