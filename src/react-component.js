import React, { useState, useEffect } from 'react';

const ReactComponent = () => {

    const [count, setCount] = useState(0)

    const [age, setAge] = useState(24)

    //componentDidMount
    useEffect(() => {
        console.log("componentDidMount by useEffect")
    }, [])

    //componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate by useEffect")
    })

    //Call for count state 
    useEffect(() => {
        console.log("Call for count state by useEffect")
    }, [count])

    //Call for age state 
    useEffect(() => {
        console.log("Call for age state  by useEffect")
    }, [age])



    return (
        <div className="container">
            <div className="counter-area">
                <h2>Count:{count}</h2>
                <button className="btn btn-success mr-4" onClick={() => setCount(count + 1)}>
                    ADD
                </button>

                <button className="btn btn-success" onClick={() => setCount(count - 1)}>
                    SUB
               </button>
            </div>

            <div className="age-counter-area">
                <h2>Age:{age}</h2>
                <button className="btn btn-success mr-4" onClick={() => setAge(age + 1)}>
                    ADD
                </button>

                <button className="btn btn-success" onClick={() => setAge(age - 1)}>
                    SUB
                </button>
            </div>

        </div>
    );
}

export default ReactComponent;


