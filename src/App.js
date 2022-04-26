import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		//console.log(toDo);
		if (toDo === "") {
			return;
		}
		setToDo(""); //state를 직접 수정하지 않고 함수를 통해서 값을 수정한다.
		setToDos((currentArray) => [toDo, ...currentArray]); //current state 또는 previous state라고 불러도 된다.

		//current Array에 new Array를 받아올 거다. 이 state는 항상 새로운 것이어야한다.
		//현재의 array를 가져왓고, 새로운 array를 return해주고 싶다.
		//새로운 array에는 state에 있는 Todo와 모든 이전의 Todos를 가져오고 싶다.

		//const food = [1,2,3,4]라는 array에 food element들로 새로운 array를 만들고 싶다면?
		//만약 [6, food]라고 한다면 => [6, Array(4)]가 된다. Array 안에 Array가 들어가게됨.
		//element를 데려오기 위해서는 [6, ...food] = > [6,1,2,3,4]가 된다.

		//state를 수정하기 위해서는 두가지의 옵션이 있음
		//1. setToOD(""); 와 같이 값을 정해주는 것 .
		//2. setToDos((currentArray) => [toDo, ...currentArray]); 와 같이 함수로 값을 계산해서 돌려주는 것.
	};
	console.log(toDos);
	console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
	return (
		<div>
			<h1>My TO DOS ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="write your to do"
				/>
				<button>Add TODO</button>
			</form>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
//map사용하기
//Array 각가의 element들을 바꾸고 싶을때 사용할 수 있음.
//map() 괄호 안에 함수를 넣을 수 있도록 해준다.
//이 함수는 array의 모든 item에 대해서 실행한다. 실행한 값은 새로운 array에 담기게 된다.
//map은 함수의 첫번째 argument로 현재의 item을 가져올 수 있다. 두번쨰 argument는 index

//ex) ['there',''how','are','you']라는 arrry가 있을 때 .map((item) => item.toUpperCase)하면 :::(item이 아니라 다른 변수명도 가능함)
//['THERE', 'HOW', 'ARE', 'YOU']로 받을 수 있음.
export default App;
