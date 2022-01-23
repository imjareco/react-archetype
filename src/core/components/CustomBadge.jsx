import PropTypes from "prop-types";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export const CustomBadge = ({ icon, items, color, ...props }) => {
	return (
		<IconButton {...props}>
			<Badge badgeContent={items} color={color}>
				{icon}
			</Badge>
		</IconButton>
	);
};

CustomBadge.defaultProps = {
	items: 0,
	color: "error",
};

CustomBadge.propTypes = {
	icon: PropTypes.node.isRequired,
	items: PropTypes.number,
	color: PropTypes.string,
	props: PropTypes.object,
};
