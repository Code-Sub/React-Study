import { Link } from 'react-router-dom';
import dummy from '../db/data.json';
import { useEffect, useState } from 'react';

export default function DayList() {
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);
    
    
    function onClick() {
        setCount(count +1)
    }
    // 이전의 days 배열은 더 이상 사용되지 않으면 가비지 컬렉션의 대상이 된다
    function onClick2() {
        days.push({
            id: Math.random(),
            day:1
        })
        setDays(days)
        // setDays([
        //     ...days, {
        //         id: Math.random(),
        //         day: 1
        //     }
        // ])
    }
    
    useEffect(()=> {
        console.log("Count change");
        
    },[count])
    
    
    return (
        <>
            <ul className='list_day'>
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day Chage</button>
        </>
    );
}
