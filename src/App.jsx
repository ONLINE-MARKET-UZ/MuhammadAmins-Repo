import { Button, DatePicker } from "antd";
import Header from "./components/Header";
import Intro from "./components/Intro"
import Offers from "./components/Offers"
import OrderForm from "./components/OrderForm/OrderForm"


const App = () => {
	return (
		<div>
			<Header />

			<Intro/>
			<Offers/>
			<OrderForm/>
		</div>
	);
};

export default App;
