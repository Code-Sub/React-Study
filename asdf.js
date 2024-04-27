import React, { useState } from 'react';

const Hello = () => {
    // useState 훅을 사용하여 name 상태를 관리합니다. 초기값은 "Hello"입니다.
    const [name, setName] = useState('Hello');

    // showName 함수는 setName을 호출하여 name 상태를 "John"으로 변경합니다.
    const showName = () => {
        setName("John");
    }

    return (
        <div>
            {/* h1 태그의 내용을 name 상태 값으로 설정합니다. */}
            <h1>{name}</h1>
            {/* onClick 이벤트 핸들러에 showName 함수를 연결합니다.
                 React에서는 이벤트 핸들러의 이름이 camelCase로 작성되어야 합니다. */}
            <button onClick={showName}>Show name</button>
        </div>
    ); 
}

export default Hello;
