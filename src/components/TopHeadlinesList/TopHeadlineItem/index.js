function TopHeadlineItem({
	title,
	description,
	content,
	publishedAt,
	urlToImage,
}) {
	return (
		<div className="item_container">
			<div className="article-info">
				<h2>{title}</h2>
				<p>{content}</p>
				<p>{description}</p>
			</div>
			<div className="article-img">
				<img className="top-headline-img" src={urlToImage} alt="" />
			</div>
		</div>
	);
}

export default TopHeadlineItem;
