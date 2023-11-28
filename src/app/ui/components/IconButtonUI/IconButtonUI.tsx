import { IconButton, IconButtonProps } from '@mui/material';

export function IconButtonUI(props: IconButtonProps) {
  return (
    <div>
      <IconButton {...props}>{props.children}</IconButton>
    </div>
  );
}
