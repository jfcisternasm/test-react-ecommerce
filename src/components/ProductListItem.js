import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';


function ProductListItem({ product }) {

    const dispatch = useDispatch();

    const onClickAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            product
        });
    }
    return (
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="140"
                    image={product.image}
                    title={product.name}
                    style={{ width: 'auto', margin: 'auto' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.type}
                    </Typography>
                    <Typography variant="h6" component="p">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardContent>
            <CardActions>
                <Button style={{ flex: 1 }} color="primary" startIcon={<AddShoppingCartIcon />} variant="contained" onClick={onClickAddToCart}>
                    <Typography variant="body2" component="h2">
                        Agregar
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem;