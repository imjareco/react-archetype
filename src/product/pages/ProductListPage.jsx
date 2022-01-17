import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useQuery, useQueryClient } from 'react-query';
import { getProducts } from 'product/services';

import { SearchBar } from 'core/components/SearchBar';
import Grid from '@mui/material/Grid';
import { ItemBox } from 'product/components/ItemBox';
import Typography from '@mui/material/Typography';
import LoadingBox from 'core/components/LoadingBox';

const ProductListPage = () =>  {
  const [products, setProducts] = useState([]);
  const [paramsSearch, setParamsSearch] = useState('');

  const queryClient = useQueryClient();
  const { data: items, isSuccess } = useQuery(
    ['getProducts'],
    getProducts,
    {
      staleTime: 3600 * 1000,
      initialDataUpdatedAt: () => queryClient.getQueryState('getProducts')?.dataUpdatedAt,
      initialData: () => {
        // Get the query state
        const state = queryClient.getQueryState('getProducts');  
        // If the query exists and has data that is no older than 1 hour...
        if (state && (Date.now() - state.dataUpdatedAt) <= 3600 * 1000) {
          // return the cache data
          return state.data;
        }
        // Otherwise, return undefined and let it fetch from a hard loading state!
        return undefined;
      },
    }
  );

  useEffect(() => {
    if (items && isSuccess) {
      setProducts(items);
    }
  }, [items, isSuccess]);

  useEffect(() => {
    if (paramsSearch) {
      const auxItems = items.filter(({ brand, model }) => 
        brand.toLowerCase().includes(paramsSearch)
          || model.toLowerCase().includes(paramsSearch));
      setProducts(auxItems || items);
    } else {
      setProducts(items);
    }
  }, [paramsSearch]);

  return (
    <>
      <Grid container maxWidth="xl" pb={2}>
        <Grid item xl>
          <Typography mt={2} variant="h4">Product List</Typography>
        </Grid>
        <Grid item xl={3}>
          <SearchBar setParams={setParamsSearch}/>
        </Grid>
      </Grid>

      {!products ? 
        <LoadingBox /> 
        :        
        <Grid container rowSpacing={2} justifyContent={'space-around'}>
            {products.map((item) => (
              <Grid key={item.id} item>
                <ItemBox item={item} />
              </Grid>        
            ))}
        </Grid>        
      }
    </>
  );

};

ProductListPage.propTypes = {
  products: PropTypes.array,
};

export default ProductListPage;