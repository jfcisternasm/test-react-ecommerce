import React from 'react';
import { Box, Grid, Toolbar, AppBar, Typography, Button } from '@material-ui/core';

import ShoppingCartPanel from "./ShoppingCartPanel";

function ShoppingCartPage() {
    return (
        <Box display="flex" flex="1" style={{ padding: 16 }} flexDirection="column">
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Revisar pedido
                    </Typography>
                    <div style={{ flex: 1 }}></div>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} style={{ padding: 16, paddingTop: 80 }}>
                <ShoppingCartPanel />
            </Grid>
            <Button style={{ flex: 1 }} color="primary" variant="contained" disabled>Confirmar pedido</Button>
        </Box>
    )
}

export default ShoppingCartPage;