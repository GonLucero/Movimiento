import { getCryptos } from "../actions/index";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../EstilosCss/Inicio.css"
import back from "./images/hola.jpg"
import { useDispatch } from "react-redux";
export default function Inicio() {

  const dispatch = useDispatch();
  const [nombre, setNombre] = useState(""); // declaro un estado inicial nombre, inicialmente vacio
  // en nombre guardo, lo que escribo en la busqueda
  function handleSubmit(e) { // cuando se accione, reseteo el estado 
      e.preventDefault();
      setNombre(""); 
  }
  
  function buscar (){
      if(nombre != ''){
         
          // dispatch(search(nombre));
          
          console.log('llego aqiii')
      }
      
  }
 

  return (
    <div className="div1">
      <div className="div">
        <h1>LA CALLE ANDA DICIENDO</h1>
        <input type="input" className="input" placeholder="Frase..." />
        <button type="submit" className="button" onClick={buscar}> Login </button>
      </div>
      </div>



  );
}


  //     <div className="main">
  //     <img class="backk" src={back} alt="" />
  //     <div className="searchbarr">
  //               <form onSubmit={(e) => handleSubmit(e)}> 
  //                   <input
  //                   value={nombre}
  //                   onChange={(e) => setNombre(e.target.value)}
  //                   placeholder="Search..."
                    
  //                   type="input"
  //                   ></input>
  //                    <Link to="/home" onClick={() => buscar()}>
  //                       <button name="name" type="submit" >🔍ENTER</button>
  //                       </Link>
  //               </form>
  //           </div>

  // <div>
  //       <Link to="/home">
  //         <button className='button' type="submit">ENTER</button>
  //       </Link>
  //       </div>

  //       </div>