import React, { useContext } from "react";
import spain from "../images/spain.jpg";
import france from "../images/francia.png";
import uk from "../images/uk.png";
import { Context_Act } from "../Contexto/Context_Act";

function Banderas() {
  const {setIndex} = useContext(Context_Act)
  return (
    <div className="imgs">
      <img src={spain} onClick={()=>{setIndex(0)}}/>
      <img src={france} onClick={()=>{setIndex(2)}}/>
      <img src={uk} onClick={()=>{setIndex(1)}}/>
    </div>
  );
}

export default Banderas;
