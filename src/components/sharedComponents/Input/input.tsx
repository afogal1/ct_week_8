// With the following code, this will allow material-UI designs to still be useful, but we will have more control 
// over the props we need as well as where we can place our newly minted input.
import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface inputType {
    name: string;
    placeholder: string;
}

export const Input = forwardRef(( props:inputType,ref ) => {
    return(
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            type='text'
            {...props}
        ></TextField>
    );
});