import { useState } from "react";
const Sample = ()=> {
       const [name, setName]= useState('John Doe');

       const changeName =()=>{
              setName('Leslie Luvutse');
       }

 return(
              <div>
                     <h1>My name is {name}</h1>
                <button onClick={changeName}> Change Name </button>
              </div>
       );
       }
       export default Sample;