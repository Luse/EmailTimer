import React from 'react';
import Box from '@material-ui/core/Box';

export const Container = props => (
    <Box display="grid" height="100%" width="100%" gridTemplateColumns="repeat(10, 1fr)" gridTemplateRows="repeat(10, 1fr)" gridColumnGap="0px" gridRowGap="0px">
        {props.children}
    </Box>
)