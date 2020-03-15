import React from 'react';
import Box from '@material-ui/core/Box';


export const Content = props => (
<Box display="grid" gridArea="2 / 1 / 6 / 6">
  {props.children}
</Box>
)