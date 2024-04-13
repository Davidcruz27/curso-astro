import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
	const [subscribe, setSubscribe] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					toast.success("Felicidades, ya estas subscrito");
					setSubscribe(!subscribe);
				}}
			>
				{subscribe ? "Ya esta suscrito" : "Subscribete"}
			</button>
			<ToastContainer />
		</>
	);
}

export default Button;
