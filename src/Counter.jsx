import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(123);
    const[count2, setCount2] = useState(456);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count2 : {count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>Increase</button>
        </div>
    )
}