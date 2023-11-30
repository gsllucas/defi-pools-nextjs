import { useEffect, useState } from 'react';

import { SlideAnimation } from '@/app/ui/components/SlideAnimation/SlideAnimation';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import { Title } from '@/app/ui/components/Title/Title';
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { MaterialIconUI } from '@/app/ui/components/MaterialIconUI/MaterialIconUI';
import { LastUpdateTime } from '../LastUpdateTime/LastUpdateTime';
import { MainContentTabProps } from '../../interfaces/MainContentTabProps';

export function Pools({ startAnimationTrigger }: MainContentTabProps) {
  const [search, setSearch] = useState('');

  function handleChange(event: any) {
    const value = event.target.value.toUpperCase();
    setSearch(value);
  }

  function selectAdornmentIcon() {
    return (
      <InputAdornment position="start">
        <MaterialIconUI icon="expand_more" size={14} />
      </InputAdornment>
    );
  }

  return (
    <SlideAnimation startTrigger={startAnimationTrigger}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title title="All Pools"></Title>
        <LastUpdateTime />
      </Box>
      <Spacing height={30} />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <FormControl>
            <TextField
              variant="filled"
              label="Search by token"
              placeholder="ETH"
              value={search}
              onChange={handleChange}
              sx={{ width: 360 }}
            />
          </FormControl>
          <Spacing width={12} />
          <FormControl variant="filled">
            <InputLabel>Exchange</InputLabel>
            <Select IconComponent={selectAdornmentIcon} sx={{ width: 140 }}>
              <MenuItem value="" sx={{ color: 'transparent' }}>
                '
              </MenuItem>
              <MenuItem value="uniswap">UniSwap</MenuItem>
              <MenuItem value="sushiswao">SushiSwap</MenuItem>
              <MenuItem value="pancakeswap">PancakeSwap</MenuItem>
            </Select>
          </FormControl>
          <Spacing width={12} />
          <FormControl variant="filled">
            <InputLabel>Chain</InputLabel>
            <Select IconComponent={selectAdornmentIcon} sx={{ width: 140 }}>
              <MenuItem value="" sx={{ color: 'transparent' }}>
                '
              </MenuItem>
              <MenuItem value="uniswap">UniSwap</MenuItem>
              <MenuItem value="sushiswao">SushiSwap</MenuItem>
              <MenuItem value="pancakeswap">PancakeSwap</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* TODO: Make loading circular progress request state */}
        <Tooltip title="Export as CSV">
          <IconButton aria-label="delete" color="primary">
            <MaterialIconUI icon="cloud_download" />
          </IconButton>
        </Tooltip>
      </Box>
    </SlideAnimation>
  );
}
