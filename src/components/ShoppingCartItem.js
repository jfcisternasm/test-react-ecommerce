import React from 'react';
import { Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

        <ListItem key={item.product.id}>
            <Avatar src={item.product.image}>
            </Avatar>
            <ListItemText
                primary={item.product.name}
            />
            <ListItemSecondaryAction>
                <IconButton onClick={decrementItem} disabled={item.quantity <= 1}>
                    <RemoveIcon></RemoveIcon>
                </IconButton>
                {item.quantity}
                <IconButton onClick={addItem}>
                    <AddIcon></AddIcon>
                </IconButton>

                <IconButton onClick={removeItem}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ShoppingCartItem;