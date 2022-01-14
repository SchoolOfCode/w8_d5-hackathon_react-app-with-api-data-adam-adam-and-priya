import "./App.css";
import { useState, useEffect } from "react";

import TopHeadlinesList from "./components/TopHeadlinesList";

const APIKEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    let response =
      await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}
	`);
    let data = await response.json();
    console.log(data);
    setArticles(data.articles);
  }

  return articles ? (
    <main>
      <h1>News for you</h1>
      <TopHeadlinesList articles={articles} />
    </main>
  ) : (
    <></>
  );
}

export default App;

// 	const [article, setArticle] = useState();

// 	useEffect(() => {
// 		getArticle();
// 	}, []);

// 	async function getArticle() {
// 		let response =
// 			await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=232c1466bb04434fa070da90ffdf3011
// `);
// 		let data = await response.json();
// 		setArticle(data);
// 	}
