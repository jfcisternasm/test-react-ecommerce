import React from 'react';
import { Avatar, ListItemSecondaryAction, IconButton, Button, ListItem, ListItemAvatar, ListItemText, Divider, Box, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function ShoppingCartItem({ item }) {

    const dispatch = useDispatch();

    const addItem = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            product: item.product
        });
    }

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            product: item.product
        });
    }

    const decrementItem = () => {
        dispatch({
            type: 'DECREMENT_PRODUCT',
            product: item.product
        });
    }
    return (
        <Box display="flex" alignItems="center">
            <Box display="flex" flexDirection="column" justifyContent="center" style={{ marginRight: 12 }}>
                <IconButton onClick={addItem} size="small">
                    <AddIcon fontSize="inherit"></AddIcon>
                </IconButton>
                <Typography variant="body2" style={{ textAlign: 'center' }}>{item.quantity}</Typography>
                <IconButton onClick={decrementItem} disabled={item.quantity <= 1} size="small">
                    <RemoveIcon fontSize="inherit"></RemoveIcon>
                </IconButton>
            </Box>
            <Divider></Divider>
            <Box flex="1">
                <ListItem key={item.product.id}>
                    <ListItemAvatar style={{ width: 'auto' }}>
                        <Avatar src={item.product.image} variant="square">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.product.name}
                        secondary={('$' + item.product.price + '/un')}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={removeItem}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Box>
        </Box>
    )
}

export default ShoppingCartItem;