import { useEffect, useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Hii');
    }, [])


    return (
        <>
            <div className="text-center">
                <button className="btn btn-danger">{count}</button>
            </div><br></br>

            <div className="text-center">
                <button className="btn btn-primary" onClick={() => {
                    setCount(count + 1);
                }}>Add</button>
            </div><br></br>

            <div className="text-center">
                <button className="btn btn-primary" onClick={() => {
                    setCount(count - 1);
                }}>Substract</button>
            </div>




        </>
    )

}