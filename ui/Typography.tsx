import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

export const Title = ({ children }: ComponentProps) => {
  return (
    <Typography fontSize={48} variant='h1'>
      {children}
    </Typography>
  );
};

export const Subtitle = ({ children }: ComponentProps) => {
  return (
    <Typography fontSize={32} variant='h2'>
      {children}
    </Typography>
  );
};

export const SubtitleVariant = ({ children }: ComponentProps) => {
  return (
    <Typography variant='h5' color={"var(--yellow)"} component='div'>
      {children}
    </Typography>
  );
};

export const LargeText = ({ children }: ComponentProps) => {
  return (
    <Typography fontSize={20} sx={{ margin: "8px 0" }}>
      {children}
    </Typography>
  );
};

export const LargeTextBold = ({ children }: ComponentProps) => {
  return (
    <Typography fontSize={20} fontWeight='bold' sx={{ margin: "8px 0" }}>
      {children}
    </Typography>
  );
};

export const BodyText = ({ children }: ComponentProps) => {
  return <Typography fontSize={18}>{children}</Typography>;
};

export const BodyTextBold = ({ children }: ComponentProps) => {
  return (
    <Typography fontSize={18} fontWeight='bold'>
      {children}
    </Typography>
  );
};

export const TinyText = ({ children }: ComponentProps) => {
  return <Typography sx={{ mb: 1.5 }}>{children}</Typography>;
};

export const TinyTextVariant = ({ children }: ComponentProps) => {
  return (
    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
      {children}
    </Typography>
  );
};
