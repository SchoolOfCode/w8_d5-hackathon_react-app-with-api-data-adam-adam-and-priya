import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    let response =
      await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=232c1466bb04434fa070da90ffdf3011
`);
    let data = await response.json();
    setArticle(data);
  }

  console.log(article);

  return article ? <div> </div> : <></>;
}

export default App;
