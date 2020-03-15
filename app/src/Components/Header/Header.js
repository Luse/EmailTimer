import React from 'react';
import Box from '@material-ui/core/Box';


export const Header = props => (
<Box display="grid" gridArea=" 1 / 1 / 2 / 6">
  {props.children}
</Box>
)