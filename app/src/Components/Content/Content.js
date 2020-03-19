import React from 'react';
import Box from '@material-ui/core/Box';


export const Content = props => (
<Box display="grid" width="100%" gridArea="2 / 1 / 6 / 10">
  {props.children}
</Box>
)