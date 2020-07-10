import React, { useState } from 'react';
import { Box, Button, Badge, Dialog, DialogTitle, DialogContent, IconButton, DialogActions } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    useHistory
} from "react-router-dom";

import ShoppingCartPanel from "./ShoppingCartPanel";

function ShoppingCartButton() {

    const cart = useSelector(store => store.cart);
    const [dialogOpen, setDialogOpen] = useState(false);

    let history = useHistory();

    const handleClose = () => {
        setDialogOpen(false);
    };

    return (
        <Box>
            <IconButton onClick={() => setDialogOpen(true)} aria-label="Carrito de compra" color="inherit">
                <Badge badgeContent={cart.items.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>

            <Dialog aria-labelledby="carro de compra" onClose={handleClose} open={dialogOpen} maxWidth="md" fullWidth={true}>
                <DialogTitle >Carro</DialogTitle>
                <DialogContent dividers>
                    <ShoppingCartPanel></ShoppingCartPanel>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ flex: 1 }}
                        onClick={() => history.push('carro')}
                    >
                        Hacer pedido
                        </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ShoppingCartButton;