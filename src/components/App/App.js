import "./App.css";
import { useState, useEffect } from "react";
import TopHeadlinesList from "../TopHeadlinesList";
import CategoryButton from "../categoryButton";

const APIKEY = process.env.REACT_APP_ACCESS_KEY;

//lets turn the getArticle into our own custom hook, so it can be used in each of our reusable button components using the term paramater and the title eg getArticle(`?country=gb&category=${title}`)

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticle("?country=gb");
  }, []);

  async function getArticle(term) {
    let response =
      await fetch(`https://newsapi.org/v2/top-headlines/${term}&apiKey=${APIKEY}
	`);
    let data = await response.json();
    console.log(data);
    setArticles(data.articles);
  }

  return articles ? (
    <main>
      <h1>News for you</h1>
      <nav>
        <CategoryButton
          title={"Home"}
          onClick={() => {
            getArticle("?country=gb");
          }}
        />
        <CategoryButton
          title={"Sports"}
          onClick={() => {
            getArticle("?country=gb&category=sports");
          }}
        />

        <CategoryButton
          title={"Business"}
          onClick={() => {
            getArticle("?country=gb&category=business");
          }}
        />

        <CategoryButton
          title={"Technology"}
          onClick={() => {
            getArticle("?country=gb&category=technology");
          }}
        />

        <CategoryButton
          title={"Entertainment"}
          onClick={() => {
            getArticle("?country=gb&category=entertainment");
          }}
        />

        <CategoryButton
          title={"Health"}
          onClick={() => {
            getArticle("?country=gb&category=health");
          }}
        />

        <CategoryButton
          title={"Science"}
          onClick={() => {
            getArticle("?country=gb&category=science");
          }}
        />
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
