import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotificationContainer = () => (
	<ToastContainer autoClose={3000} position="bottom-right" />
);
