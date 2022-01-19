import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useQuery } from "react-query";

import { getProduct } from "product/services";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LoadingBox from "core/components/LoadingBox";
import { ItemDetailBox } from "product/components/ItemDetailBox";

const ProductDetailPage = () => {
    let { idProduct } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(undefined);
    const goHome = () => navigate("/products", { replace: true });

    const { data: item, isSuccess } = useQuery(
        ["getProduct", idProduct], 
        () => getProduct(idProduct),
        {
            // The query will not execute until the idProduct exists
            enabled: !!idProduct,
        }
    );

    useEffect(() => {
        if (isSuccess) {
            setProduct(item);
        }
    }, [isSuccess]);

    const {
        brand,
        model,
    } = product ?? {};
  
    return(
        <>      
            <Grid container maxWidth="xl" pb={2}>
                <Grid item xl={11} mt={2}>
                    <Typography variant="h4">{!product ? "Loading..." : `${brand} ${model}`}</Typography>
                </Grid>
                <Grid item xl={1} pt={2}>
                    <IconButton
                        color="primary"
                        component="span"
                        onClick={goHome}
                    >
                        <ArrowBack />
                    </IconButton>
                </Grid>
            </Grid>

            {!product ? 
                <LoadingBox /> 
                :        
                <ItemDetailBox product={product} />
            }
        </>
    );

};

export default ProductDetailPage;