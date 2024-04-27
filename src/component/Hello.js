import { useState } from 'react';
import React from 'react';
import UserNmae from './UserName';



const Hello = (props) => {
    console.log(props);
    const [name, setName] = useState('mike');
    const [ageState, setAge] = useState(props.age);
    const msg = ageState > 19 ? "성인입니다" : "미성년자 입니다.";
    
    return (
        <div>
            <h2>{name} {ageState} : {msg}</h2>
            <UserNmae name={name} />
            <button onClick={()=> {
                setName(name === "mike" ? "Jane" : "mike")
                setAge(ageState+1)
            }}>Change</button>
        </div>
    );
};
export default Hello;
