import { useState } from "react";
import PropTypes from "prop-types";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Sidebar from "./Sidebar";
import { CustomBadge } from "./CustomBadge";
import { CartItemList } from "product/components/CartItemList";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = ({ title }) => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const queryClient = useQueryClient();
	const { data: items } = useQuery(
		["cartList"],
		async () => await queryClient.getQueryData("cartList"),
		{
			initialData: [],
		}
	);

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
						<CustomBadge
							icon={<ShoppingCartIcon />}
							items={items.length}
							onClick={() => setIsOpen(true)}
						/>
					</Box>
				</Toolbar>
			</AppBar>
			<Sidebar open={isOpen} setOpen={setIsOpen}>
				<CartItemList items={items} />
			</Sidebar>
		</Box>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};
