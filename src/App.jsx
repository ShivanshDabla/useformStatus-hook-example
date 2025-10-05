import React from 'react'
import { useFormStatus } from 'react-dom';

const App = () => {
  const handle= async()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("submitted")
  }

  function CustomerForm(){
    const {pending}=useFormStatus();
    /*
    useFormStatus() tells whether the form submission is in progress.
    It returns { pending: true/false }.    
    When the form is submitting → pending = true 
    When done → pending = false*/

    console.log(pending);
    return(
      <div>
      <input type='text' placeholder='enter you name'></input>
      <br></br>
      <br></br>
      <input type='password' placeholder='enter you password'></input>
      <br></br>
      <br></br>
      <button disabled={pending}>submit</button>
      </div>
      

    )
  }

  return (
    <div>
      <h1>useForm status hook in React</h1>

      <form action={handle}>
      <CustomerForm />
      </form>
     
      
    </div>
  )
}

export default App