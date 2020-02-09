import React, { useState } from 'react';

const InputComponent = (props) => {
    const [count, setCount] = useState("");
    const 

    function handelChangeText(e) {
        setCount(e.target.value)
    }

    return (
        <div className="w-100">
            <input value={count} onChange={handelChangeText} />
            <br></br>
            <p>{props.title}: {count}</p>
            <button onClick={() => setCount(count + 1)}>HIDE</button>
        </div>)
}
export default InputComponent;