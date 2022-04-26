import styles from "./Button.module.css";

import PropTypes from "prop-types";
//npm i prop-types를 터미널에서 설치한다.

function Button({ text }) {
	//어떤 props를 가질거다. text
	return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
	text: PropTypes.string.isRequired,
	//prop으로 전달할 값의 type을 지정한다.
};

export default Button;
// App.js에서 Button을 사용하게하고 싶다.
