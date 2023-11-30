import { InputBase, alpha, styled } from '@mui/material';

export const CustomInput = styled(InputBase)(({ theme }) => {
  return {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 12,
      position: 'relative',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: '#EAEAEA',
      fontSize: 12,
      fontWeight: 400,
      color: '#2c2935',
      width: 368,
      height: 25,
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      fontFamily: ['Rubik'].join(','),
      '&:focus': {
        boxShadow: `${alpha('#774af6', 0.25)} 0 0 0 0.2rem`,
        borderColor: '#774af6',
      },
    },
  };
});

// export function
