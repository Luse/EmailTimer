import React from 'react';
import Box from '@material-ui/core/Box';

export const Container = props => (
    <Box display="grid" height="100%" gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="repeat(5, 1fr)" gridColumnGap="0px" gridRowGap="0px">
        {props.children}
    </Box>
)