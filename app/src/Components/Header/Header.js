import React from 'react';
import Box from '@material-ui/core/Box';


export const Header = props => (
<Box display="grid" width="100%" gridArea=" 1 / 1 / 2 / 11">
  {props.children}
</Box>
)