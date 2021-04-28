import React from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: () => void // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
    addUserCallback: (name:string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
