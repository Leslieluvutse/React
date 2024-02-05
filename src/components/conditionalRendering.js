import {useState} from 'react';

const ConditionalRendering =()=>{
              const[display, setDisplay]=useState(true)
              let output;
              if (display){
                            // return(
                                          // <div>
                            {/* <h1>Display is true hence this line is diplayed</h1> */}
                            {/* </div> */}
                            {/* ) */}
                           {/* }else{ */}
                            {/* return( */}
                                          {/* <div> */}
                                               {/* <h1>Display is false: </h1>          */}
                                                         {/* </div> */}
                            {/* ) */}
                           {/* } */}
              {/* }; */}
              // Ternary Conditional
               return display 
              ( <div>
                            <h1>Display is true hence this line is displayed</h1>
              </div>
              );(
                            <div><h1>Display is false:</h1></div>
              );
              // conditional rendering using elements
              // if(display){    
                            // output = <h1>Display is true hence this line is displayed</h1>
              // } else{
                            // output= <h1>Display is false</h1>
              // };
           export default ConditionalRendering;