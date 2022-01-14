import "./App.css";
import { useState, useEffect } from "react";

import TopHeadlinesList from "./components/TopHeadlinesList";

const APIKEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticle("?country=us");
  }, []);

  async function getArticle(term) {
    let response =
      await fetch(`https://newsapi.org/v2/top-headlines/${term}&apiKey=${APIKEY}
	`);
    let data = await response.json();
    console.log(data);
    setArticles(data.articles);
  }
  // async function getSportArticle() {
  //   let response =
  //     await fetch(`https://newsapi.org/v2/top-headlines/?category=sports&apiKey=${APIKEY}
  // `);
  //   let data = await response.json();
  //   console.log(data);
  //   setArticles(data.articles);

  return articles ? (
    <main>
      <h1>News for you</h1>
      <nav>
        <button
          onClick={() => {
            getArticle("?country=gb");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=sports");
          }}
        >
          Sports
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=business");
          }}
        >
          Business
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=technology");
          }}
        >
          Technology
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=entertainment");
          }}
        >
          Entertainment
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=health");
          }}
        >
          Health
        </button>
        <button
          onClick={() => {
            getArticle("?country=gb&category=science");
          }}
        >
          Science
        </button>
      </nav>
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
