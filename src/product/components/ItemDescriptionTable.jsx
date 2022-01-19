import PropTypes from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const productTypes = {
	brand: "brand",
	model: "model",
	price: "price",
	cpu: "cpu",
	ram: "ram",
	os: "os",
	displayResolution: "displayResolution",
	battery: "battery",
	primaryCamera: "primaryCamera",
	secondaryCmera: "secondaryCmera",
	dimentions: "dimentions",
	weight: "weight",
};

const formatCell = (key, val) => {
	if (val) {
		if (Array.isArray(val)) {
			return val.join(", ");
		}

		switch (key) {
			case productTypes.price:
				return `${val} €`;
			case productTypes.weight:
				return `${val} gr`;
			default:
				return val;
		}
	}
	return "Empty";
};

export const ItemDescriptionTable = ({ product }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					{Object.keys(productTypes).map((key) => (
						<TableRow
							key={key}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{key}
							</TableCell>
							<TableCell align="right">
								{formatCell(key, product[key])}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

ItemDescriptionTable.defaultProps = {
	product: {},
};

ItemDescriptionTable.propTypes = {
	product: PropTypes.object.isRequired,
};
