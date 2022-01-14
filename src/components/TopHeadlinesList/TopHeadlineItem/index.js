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
        <h2 className="top_headline_h2">{title}</h2>
        <p className="top_headline_p">{content}</p>
        <p className="top_headline_p2">{description}</p>
      </div>
      <div className="article-img">
        <img className="top-headline-img" src={urlToImage} alt="" />
      </div>
    </div>
  );
}

export default TopHeadlineItem;
