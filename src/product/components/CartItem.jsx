import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const CartItem = ({ item, onRemove }) => {
	const navigate = useNavigate();
	return (
		<Grid container alignItems="center" direction="row">
			<Box
				p={1}
				sx={{ cursor: "pointer" }}
				onClick={() => navigate(`/products/${item.id}`, { replace: true })}
				width={"240px"}
			>
				<Grid container>
					<Grid item xl={9}>
						<Typography noWrap>
							{item && `[${item.brand}] ${item.model}`}
						</Typography>
					</Grid>
					<Grid item xl={3}>
						<Typography fontWeight={"bold"}>
							{`${item.price || "0"} €`}
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Grid item>
				<IconButton onClick={() => onRemove(item.id)}>
					<CloseIcon color="error" fontSize="small" />
				</IconButton>
			</Grid>
		</Grid>
	);
};

CartItem.defaultProps = {
	item: {},
	onRemove: () => {},
};

CartItem.propTypes = {
	item: PropTypes.object.isRequired,
	onRemove: PropTypes.func,
};
