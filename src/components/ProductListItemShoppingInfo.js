import React, { useEffect, useState } from 'react';
import { Typography, Button, Box, IconButton, ButtonGroup } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function ProductListItemShoppingInfo({ product }) {

    const { items } = useSelector(store => store.cart);
    const [cartProduct, setCartProduct] = useState();

    useEffect(() => {
        setCartProduct(items.find(item => item.product.id === product.id));
    }, [items]);

    const dispatch = useDispatch();

    const addItem = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            product: product
        });
    }

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            product: product
        });
    }

    const decrementItem = () => {
        dispatch({
            type: 'DECREMENT_PRODUCT',
            product: product
        });
    }
    return (
        <Box flex="1">
            {
                cartProduct ?
                    <Box display="flex" flex="1">
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={decrementItem} variant="contained" color="primary">
                                <RemoveIcon></RemoveIcon>
                            </Button>
                            <Button onClick={addItem} variant="contained" color="primary">
                                <AddIcon></AddIcon>
                            </Button>
                        </ButtonGroup>

                        <div style={{ flex: 1 }}></div>
                        <Button disabled variant="contained" color="primary">
                            {cartProduct.quantity} un.
                        </Button>
                    </Box>
                    :
                    <Button fullWidth={true} color="primary" startIcon={<AddShoppingCartIcon />} variant="contained" onClick={addItem}>
                        <Typography variant="body2" component="h2">
                            Agregar
                        </Typography>
                    </Button>
            }
        </Box>
    )
}

export default ProductListItemShoppingInfo;