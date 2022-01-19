import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "product/services";

import Button from "@mui/material/Button";
import ShoppingBag from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";

import { SelectInput } from "core/components/SelectInput";

const initialState = {
    colorCode: "",
    storageCode: "",
};

export const ItemDetailForm = ({ product }) =>  {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState(initialState);

    const queryClient = useQueryClient();
    const mutation = useMutation(addProduct, {
        onSuccess: (res, { id }) => {
            queryClient.setQueryData("cartList", (old) => {
                console.log(old);
                return [...(Array.isArray(old) && old), { id }];
            });

            navigate("/products", { replace: true });
        }
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        const { id } = product;
        e.preventDefault();
      
        mutation.mutate({ id, ...formValue });
        setFormValue(initialState);
        initForm();
    };

    const getFirstOption = (items) => {
        if (Array.isArray(items)) {
            if (items.length === 1) {
                const [item] = items;
                return item;
            }
            return "";
        }
    };

    const initForm = useCallback(() => {
        const { colors, internalMemory } = product;
        setFormValue({
            colorCode: getFirstOption(colors),
            storageCode: getFirstOption(internalMemory)
        });
    }, [product]);

    useEffect(() => {
        initForm();
    }, [product]);
    
    const { colors, internalMemory } = product;

    return(
        <>        
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!formValue.colorCode}>
                            <SelectInput
                                label="colors"
                                name="colorCode"
                                value={getFirstOption(colors) || formValue.colorCode}
                                options={colors}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!formValue.storageCode}>
                            <SelectInput
                                label="storage"
                                name="storageCode"
                                value={getFirstOption(internalMemory) || formValue.storageCode}
                                options={internalMemory}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button 
                            type="submit"
                            variant="contained" 
                            endIcon={<ShoppingBag />}
                            disabled={!formValue.colorCode || !formValue.storageCode} 
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );

};

ItemDetailForm.propTypes = {
    product: PropTypes.object.isRequired,
};