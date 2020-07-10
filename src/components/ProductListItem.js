import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core';

import ProductListItemShoppingInfo from "./ProductListItemShoppingInfo";

function ProductListItem({ product }) {
    return (
        <Card>
            <CardActionArea>
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
            </CardActionArea>
            <CardActions>
                <ProductListItemShoppingInfo product={product}></ProductListItemShoppingInfo>
            </CardActions>
        </Card>
    )
}

export default ProductListItem;