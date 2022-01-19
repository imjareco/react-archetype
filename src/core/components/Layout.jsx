import { Outlet } from "react-router-dom";

import { useTranslations } from "core/i18n";

import { Box, Container } from "@mui/material";
import { Navbar } from "core/components/Navbar";
import { BreadcrumbsWrapper } from "core/components/Breadcrumbs";

export const Layout = () => {
	const { t } = useTranslations();
	return (
		<>
			<Navbar title={t("core.title.app", { app: "Archetype" })} />
			<Container fixed>
				<Box pb={5}>
					<BreadcrumbsWrapper />
					<Outlet />
				</Box>
			</Container>
		</>
	);
};
