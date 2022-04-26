import { useEffect, useState } from "react";

function CoinTracker() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]); // useState()로 할경우 undefined이기 때문에 오류가 날거다. 그래서 빈값으로 초기화 해준다.
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
		//.then((json) => console.log(json)); 콘솔로 확인
	}, []); //api한번만 데려오고 싶어서 []로 한번만 불러온다.
	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Loading...</strong> : null}
			<ul>
				{coins.map((coin) => (
					<li key={coin.id}>
						{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
					</li>
				))}
			</ul>
		</div>
	);
}
//ul을 select로 바꾸고, li을 option으로 바꿔서 다른식으로 사용해보자.
//로딩하고 있따면 select를 숨기기 위해서 loading 보녀우즌 부분에 null 대신 채워넣는다.
//코인 갯수의 경우도 첫 로딩시에는 0으로 나오기 때문에 동일하게 {loanding ? "" : '(${coins.length})'}로 바꿔도 된다.

export default CoinTracker;
