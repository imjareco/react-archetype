import React from "react";
import PropTypes from "prop-types";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const SelectInput = ({ name, label, value, options, onChange }) =>  {  
    return(
        <>
            <InputLabel id={`${label}`}>{label}</InputLabel>
            <Select
                labelId={`${label}`}
                id={`id-${name}`}
                name={`${name}`}
                label={`${label}`}
                value={value}
                onChange={onChange}
            >
                {options.map((o) => 
                    <MenuItem 
                        key={o}
                        value={o}
                        selected={options.length === 1}
                    >
                        {`${o}`}
                    </MenuItem>
                )}
            </Select>
        </>
    );

};

SelectInput.defaultProps = {
    options: [],
};

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};