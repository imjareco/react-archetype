import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Sidebar({ position, open, setOpen, children }) {
	const [state, setState] = useState({ [position]: false });

	const toggleDrawer = (anchor, isOpen) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState({ ...state, [anchor]: isOpen });
		setOpen(isOpen);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));

	const container = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
			height={"80vh"}
			role="presentation"
			onMouseLeave={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{children}
		</Box>
	);

	return (
		<Box>
			<Drawer
				anchor={position}
				open={open}
				onClose={toggleDrawer(position, open)}
			>
				<DrawerHeader>
					<IconButton onClick={handleClose}>
						<ChevronRightIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
				{container(position)}
				<Divider />
				<Box p={2}>
					<Typography fontWeight={"bold"}>Actions</Typography>
				</Box>
			</Drawer>
		</Box>
	);
}

Sidebar.defaultProps = {
	open: false,
	position: "right",
	children: <div>Empty</div>,
};

Sidebar.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func.isRequired,
	position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
	children: PropTypes.node,
};
