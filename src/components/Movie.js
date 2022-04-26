import propTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
	//movie component가 이 properties를 parent component로부터 받아온다는 뜻
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>{title}</h2>
			<p>{summary}</p>
			<ul>{genres && genres.map((g) => ({ g }))}</ul>
		</div>
	);
}
Movie.prototype = {
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	genres: propTypes.arrayOf(propTypes.string.isRequired),
};

export default Movie;
// react router가 하는 것은 페이지를 전환하는 것
// npm react-router-dom 을 설치한다.
