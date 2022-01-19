import PropTypes from "prop-types";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CustomBadge = ({ items }) => {
	return (
		<IconButton>
			<Badge badgeContent={items} color="secondary">
				<ShoppingCartIcon />
			</Badge>
		</IconButton>
	);
};

CustomBadge.defaultProps = {
	items: 0,
};

CustomBadge.propTypes = {
	items: PropTypes.number,
};
