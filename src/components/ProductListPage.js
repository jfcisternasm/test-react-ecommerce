import React, { useState, useEffect } from 'react';
import { Box, Grid, Toolbar, AppBar, Typography, InputAdornment, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import ProductListItem from "./ProductListItem";
import ShoppingCartButton from "./ShoppingCartButton";

import SearchIcon from '@material-ui/icons/Search';

import getProductList from "../actions/getProductList";

function ProductListPage() {

    const dispatch = useDispatch();

    const { loading, products, error } = useSelector(store => store.products);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        dispatch(getProductList(searchText))
    }, [dispatch, searchText])

    return (
        <Box display="flex" flex="1" flexDirection="column">
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Demo E-commerce
                    </Typography>
                    <div style={{ flex: 1 }}></div>
                    <ShoppingCartButton></ShoppingCartButton>
                </Toolbar>
            </AppBar>
            <Box style={{ display: 'flex', padding: 16, paddingTop: 80 }}>
                <TextField style={{ flex: 1 }} placeholder="Buscar" disabled variant="outlined" onChange={(e) => setSearchText(e.target.value)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
            </Box>
            <Grid container spacing={3} style={{ padding: 16 }}>
                {loading && 'Cargando productos... '}
                {error && 'Ha ocurrido un error al cargar productos'}
                {
                    products.map((product, index) =>
                        <Grid item xs={12} sm={4} key={index}>
                            <ProductListItem product={product}></ProductListItem>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default ProductListPage;