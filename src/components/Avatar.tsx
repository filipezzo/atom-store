import React from "react";
import { AvatarImage, Avatar } from "./ui/avatar";

type Props = {
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  src?: string | undefined;
};

export default function AvatarEl({ onClick, src }: Props) {
  return (
    <Avatar onClick={onClick} className="cursor-pointer">
      <AvatarImage src={src} />
    </Avatar>
  );
}
