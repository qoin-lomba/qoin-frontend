import React from "react";
import { Button } from "../ui/button";

interface PrimaryButtonProps {
  className?: string;
  children: React.ReactNode;
}

const PrimaryButton = ({ className, children }: PrimaryButtonProps) => {
  return <Button className={className}>{children}</Button>;
};
export default PrimaryButton;
