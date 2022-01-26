import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useQueryClient } from "react-query";

import Divider from "@mui/material/Divider";
import { CartItem } from "./CartItem";

export const CartItemList = ({ items }) => {
	const queryClient = useQueryClient();
	const [products, setProducts] = useState([]);

	const handleOnRemove = (idProduct) => {
		const list = products.filter(({ id }) => id !== idProduct);
		queryClient.setQueryData("cartList", list);
	};

	useEffect(() => {
		const state = queryClient.getQueryState("getProducts");
		if (Array.isArray(items) && state) {
			const mapItems = items.map(({ id: idCart }) =>
				state.data.find(({ id }) => idCart === id)
			);
			setProducts(mapItems);
		}
	}, [items]);

	return products.map((item, index) => (
		<Box pl={1} pr={1} key={index}>
			<CartItem item={item} onRemove={handleOnRemove} />
			<Divider />
		</Box>
	));
};

CartItemList.defaultProps = {
	items: [],
};

CartItemList.propTypes = {
	items: PropTypes.array,
};
