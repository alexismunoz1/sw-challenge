import { Button } from "@mui/material";
import { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

export const ButtonPrimary = ({ children }: ComponentProps) => {
  return <Button size='large'>{children}</Button>;
};
