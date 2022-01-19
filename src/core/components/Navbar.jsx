import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { CustomBadge } from "./CustomBadge";
import { LanguageSelector } from "./LanguageSelector";
export const Navbar = ({ title }) => {
	const navigate = useNavigate();
	const [cartList, setCartList] = useState([]);
	const queryClient = useQueryClient();
	const { data: items } = useQuery(
		["cartList"],
		async () => await queryClient.getQueryData("cartList"),
		{
			initialData: [],
		}
	);

	useEffect(() => {
		setCartList(items);
		console.log("cartList", items);
	}, [items]);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Link
						sx={{
							flexDirection: "row",
							flexGrow: 0,
						}}
						color={"white"}
						component="button"
						variant="body2"
						underline="hover"
						onClick={() => navigate("/products", { replace: true })}
					>
						<Typography color={"white"} variant="h6" component="div">
							{title}
						</Typography>
					</Link>

					<Box ml={2} sx={{ flexGrow: 1 }}>
						<LanguageSelector />
					</Box>

					<Box ml={2}>
						<Typography variant="h6" component="div">
							<CustomBadge items={cartList.length} />
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
