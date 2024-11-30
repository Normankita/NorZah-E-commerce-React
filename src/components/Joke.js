import { useEffect, useState } from "react";

export const Joke = () => {

    const [chuck, setChuck]= useState({})

    useEffect(() => {
        const options= {
            method:"GET",
            Headers:{"Content-Type": "application/json"}
        }
        async function fetchJoke() {
            const response = await fetch("https://api.chucknorris.io/jokes/random", options);
            const data = await response.json();
            setChuck(data)
        }
        fetchJoke()
    }, []);
    return (
        <section className="joke">
            <p><span data-testid="jokeHeadline">{chuck.value}</span>
            <span> - api.chucknorris.io</span>
            </p>
        </section>
    );
};
