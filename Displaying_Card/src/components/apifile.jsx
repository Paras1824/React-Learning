import { useState, useEffect } from "react";

import React from 'react'

function ApiFile() {
    const [cards, setCards] = useState([])

    const fetchdata = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json()
        setCards(data)
        console.log(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className="container">
                {
                    cards.map((card) => {
                        return (
                            <div key={card.id} className="card">
                                <h1>{card.title}</h1>
                                <p>{card.body}</p>
                                <span>By : UserId : {card.userId} </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ApiFile