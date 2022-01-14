import "./App.css";
import { useState } from "react";

import sampleObject from "./libs/sampleObject.js";
import TopHeadlinesList from "./components/TopHeadlinesList";

function App() {
	const [articles, setArticles] = useState(sampleObject.articles);

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

	return (
		<main>
			<TopHeadlinesList articles={articles} />
		</main>
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
