import React from 'react';
import { Box, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import { useSelector } from 'react-redux';

import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCartPanel() {

    const cart = useSelector(store => store.cart);

    return (
        <Box display="flex" flex="1" flexDirection="column">
            <Typography variant="h6" color="inherit">
                Productos
            </Typography>

            {
                cart.items.length === 0 && (
                    <Typography variant="h6" color="inherit">
                        Tu carro está vacío
                    </Typography>
                )
            }
            <List>
                {
                    cart.items.map(cartItem =>
                        <ShoppingCartItem item={cartItem} key={cartItem.product.id}></ShoppingCartItem>
                    )
                }
            </List>
            Total { cart.total}
        </Box>
    )
}

export default ShoppingCartPanel;