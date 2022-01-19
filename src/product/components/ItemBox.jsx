import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export const ItemBox = ({ item }) => {
	const navigate = useNavigate();

	const { id, imgUrl, brand, model, price } = item;

	return (
		<Box onClick={() => navigate(`/products/${id}`, { replace: true })}>
			<Paper>
				<Box
					padding={2}
					sx={{ width: "200px", height: "250px", cursor: "pointer" }}
				>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						<Grid item xs>
							<Typography>{brand}</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
					>
						<Grid item xs>
							<Box width={"100px"}>
								<img
									width={"100px"}
									src={imgUrl}
									srcSet={imgUrl}
									alt={item.model}
									loading="lazy"
								/>
							</Box>
						</Grid>
					</Grid>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						<Grid item xs>
							<Typography>{model}</Typography>
						</Grid>
						<Grid item xs>
							<Typography>{`${price} €`}</Typography>
						</Grid>
					</Grid>
				</Box>
			</Paper>
		</Box>
	);
};

ItemBox.defaultProps = {
	item: {},
};

ItemBox.propTypes = {
	item: PropTypes.object,
};
