import { useState, useEffect } from "react";

export default function JokeFetcher() {
  const [joke, setjoke] = useState("");
  useEffect(() => {
    fetchjoke();
  }, []);
  async function fetchjoke() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setjoke(`${data.setup} == ${data.punchline}`);
  }
  return (
    <>
      <h1>todays joke is :</h1>
      <p>{joke}</p>
      <button style={{ background: "aqua",
                       color: "black",
                       border: "none",
                       borderRadius: "10px",
                       width: "150px",
                       height: "40px",
                       fontSize: "20px",
                       cursor: "pointer",
                       fontWeight: "bold"
       }} onClick={fetchjoke}>
        another joke
      </button>
    </>
  );
}
