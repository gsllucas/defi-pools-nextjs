import { MaterialIconUI } from '@/app/ui/components/MaterialIconUI/MaterialIconUI';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { useState } from 'react';

export function SearchBarFilters() {
  const [search, setSearch] = useState('');

  function handleChange(event: any) {
    const value = event.target.value.toUpperCase();
    setSearch(value);
  }

  function adornmentIcon() {
    return (
      <InputAdornment position="start">
        <MaterialIconUI icon="expand_more" size={14} />
      </InputAdornment>
    );
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <FormControl>
          <TextField
            variant="outlined"
            label="Search by token"
            placeholder="ETH"
            value={search}
            onChange={handleChange}
            sx={{ width: 360 }}
          />
        </FormControl>
        <Spacing width={12} />
        {/* TODO: Get exchanges list dynamically */}
        <FormControl variant="outlined">
          <InputLabel>Exchange</InputLabel>
          <Select IconComponent={adornmentIcon} sx={{ width: 140 }}>
            <MenuItem value="" sx={{ color: 'transparent' }}>
              -
            </MenuItem>
            <MenuItem value="uniswap">UniSwap</MenuItem>
            <MenuItem value="sushiswao">SushiSwap</MenuItem>
            <MenuItem value="pancakeswap">PancakeSwap</MenuItem>
          </Select>
        </FormControl>
        <Spacing width={12} />
        {/* TODO: Get chains list dynamically */}
        <FormControl variant="outlined">
          <InputLabel>Chain</InputLabel>
          <Select IconComponent={adornmentIcon} sx={{ width: 140 }}>
            <MenuItem value="uniswap">UniSwap</MenuItem>
            <MenuItem value="sushiswao">SushiSwap</MenuItem>
            <MenuItem value="pancakeswap">PancakeSwap</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* TODO: Make loading circular progress request state */}
      <Tooltip title="Export as CSV">
        {/* <Button
          style={{
            background: 'var(--primary-color)',
            color: '#ffffff',
            borderRadius: 20,
          }}
        >
          <MaterialIconUI icon="cloud_download" />
          <Spacing width={5} />
          Export as CSV
        </Button> */}
        <IconButton color="primary">
          <MaterialIconUI icon="cloud_download" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
