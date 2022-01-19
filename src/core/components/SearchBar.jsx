import { useState } from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useTranslations } from "core/i18n";

export const SearchBar = ({ setParams }) => {
	const { t } = useTranslations();
	const [value, setValue] = useState("");

	const handleClick = () => {
		setParams(value);
		setValue("");
	};

	return (
		<Grid container spacing={2} mb={3}>
			<Grid item xl={12}>
				<Grid pl={2} pt={1} pr={2} pb={2}>
					<TextField
						id="search"
						name="search"
						label={t("core.search")}
						variant="standard"
						value={value}
						onChange={({ target }) => setValue(target.value.toLowerCase())}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton edge="end" color="default" onClick={handleClick}>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

SearchBar.propTypes = {
	setParams: PropTypes.func,
};
