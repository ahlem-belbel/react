import React from 'react'    

const App = () => {    
    // rafce react arrow function component 
  
    const name='NINA'
    const names=['akram', 'amira','nina']
    const styles={
      color:'red',
      fontSize:'24px'
    }

  
return (
<>
    <div className='text-3xl font-bold underline'>Hello {name}</div>
    <p style={styles}>friend</p>
    <ul>     
      {names.map((name,index) => (  /**  this is a list */
        <li key={index}>{name}</li>
      ))
      }
    </ul>
    



</>
)
}

export default App;


