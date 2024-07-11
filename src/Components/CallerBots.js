import React from 'react'
import people from '../PeopleData'

export default function CallerBots() {
  return (
    <div className="callerName">
      <p style={{margin: '1rem'}}>Choose an AI buyer & start a roleplay conversation in &lt; 10 secs</p>
      <hr></hr>
      <div >
        {people.map(person=>(
            <div key={person.id} className='person'>
            <button className='btn2'> <h3>{person.name}</h3><p>{person.occupation}</p> </button>
            

            </div>
        ))}
      </div>
    </div>
  )
}
