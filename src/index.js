import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";
//import "./styles.css"; //css 사용하기
//css에 있는 style로만 반영이 되기 때문에(전역:global) 이번에는 style.css을 사용하지 않고 모듈로 각각 작성하여 사용할거다.
//모듈로 작성한 Button.module.css는 index.js 파일이 아닌 Button.js 파일에 import 시켜준다.

ReactDOM.render(
	<React.StrictMode>
		<MovieApp />
	</React.StrictMode>,
	document.getElementById("root")
);
