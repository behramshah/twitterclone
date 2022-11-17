import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchTextFieldProps {
  variant: 'standard' | 'outlined' | 'filled';
  placeholder: string;
}

export const SearchTextField: React.FC<SearchTextFieldProps> = ({
  variant,
  placeholder,
}: SearchTextFieldProps): React.ReactElement => {

  const theme = useTheme();

  const useSearchTextFieldStyles = makeStyles<any>()((theme) => ({
    root: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        padding: 0,
        paddingLeft: 15,
        '&.Mui-focused': {
          backgroundColor: '#fff',
          '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
          '& svg path': {
            fill: theme.palette.primary.main,
          },
        },
        '&:hover': {
          '& fieldset': { borderColor: 'transparent' },
        },
        '& fieldset': {
          borderColor: 'transparent',
          borderWidth: 1,
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: '12px 14px 14px 5px',
      },
    },
  
  }));

  const { classes } = useSearchTextFieldStyles(theme);

  return (
    <TextField 
      variant={variant}
      placeholder={placeholder} 
      className={classes.root} 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    >
    </TextField>
  );
}
  