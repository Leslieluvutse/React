import { useState } from "react"

const UserInput =() =>{
              const[firstname, setFirstname]=useState('');
              const [lastname,setLastname] = useState('');
              const[course,setCourse]=useState('');

              return(
      <div>
                                          <form>
                                                        <label>FirstName</label><br/>
                                                        <input type="text" name="firsname"
                                                        value={firstname} onChange={(e)=>setFirstname(e.target.value)}
                                                        placeholder="enter your firstname"/><br/>
                                                        <label>Lastname</label><br/>
                                                        <input type="text" name="lastname"
                                                        value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="enter your lastname"/><br/>

                <label>Course</label><br/>
                <input type="text" name="course"
                value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="enter course name"/><br/>

                <button>Save Details</button>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{course}</p>
                                          </form>
     </div>
                                          );
                                          }
  export default UserInput;                                        
