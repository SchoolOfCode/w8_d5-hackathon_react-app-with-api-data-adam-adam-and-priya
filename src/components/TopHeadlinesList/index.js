import TopHeadlineItem from "./TopHeadlineItem/index.js";

function TopHeadlinesList({ articles }) {
	return (
		<div>
			{articles.map(function (article) {
				return <TopHeadlineItem {...article} />;
			})}
		</div>
	);
}

export default TopHeadlinesList;
