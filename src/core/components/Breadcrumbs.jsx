import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { useQueryClient } from "react-query";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useTranslations } from "core/i18n";

export const BreadcrumbsWrapper = () => {
	const { t } = useTranslations();
	const navigate = useNavigate();
	const { idProduct } = useParams();
	const { pathname } = useLocation();
	const [keys, setKeys] = useState([]);
	const [product, setProduct] = useState({});

	const queryClient = useQueryClient();

	useEffect(() => {
		const state = queryClient.getQueryState("getProducts");
		if (idProduct && state) {
			setProduct(state.data.find(({ id }) => id === idProduct));
		}
	}, [idProduct]);

	useEffect(() => {
		if (pathname) {
			setKeys(pathname.split("/").filter((item) => item));
		}
	}, [pathname]);

	return (
		<Box mt={1}>
			{keys.length > 0 && (
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize="small" />}
					aria-label="breadcrumb"
				>
					{keys.map((item, i) => {
						const isLastItem = keys.length - 1 === i;
						return (
							<Link
								key={i}
								underline={isLastItem ? "none" : "hover"}
								color="inherit"
								onClick={() => (isLastItem ? null : navigate(item))}
							>
								<Typography color="text.primary">
									{item === idProduct
										? `${product.brand} ${product.model}`
										: t(item)}
								</Typography>
							</Link>
						);
					})}
				</Breadcrumbs>
			)}
		</Box>
	);
};
