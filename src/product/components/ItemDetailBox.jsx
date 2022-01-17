import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ItemDescriptionTable } from 'product/components/ItemDescriptionTable';
import { ItemDetailForm } from 'product/components/ItemDetailForm';

export const ItemDetailBox = ({ product }) =>  {
  const { imgUrl, model } = product;
  
  return(
    <>
        <Grid container>      
            <Grid item xs alignSelf={'center'}>
                <Box>
                    <img
                        width={'200px'}
                        src={imgUrl}
                        srcSet={imgUrl}
                        alt={model}
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item xs>
                <Typography mb={2}>Description</Typography>
                <ItemDescriptionTable product={product} />
            </Grid>
        </Grid>
        <Grid mt={5} container direction={'row-reverse'}>
            <Grid item xs={6}>
                <Typography>Actions</Typography>
                <Box pt={2} pb={2} width={250}>
                    <ItemDetailForm product={product}/>
                </Box>
            </Grid>
        </Grid>

    </>
  );

};

ItemDetailBox.propTypes = {
    product: PropTypes.object.isRequired,
};