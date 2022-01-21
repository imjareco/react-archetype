import { toast } from "react-toastify";

/**
 * @param {any} content content Text | Component | Function.
 * @param {{
 * onOpen: (props) => void,
 * onClose: (props) => void,
 * type: string,
 * }} options Options react-toastify.
 * @returns toastId.
 */

const showNotification = (content, options = { type: "success" }) =>
	toast(content, options);

export default showNotification;
