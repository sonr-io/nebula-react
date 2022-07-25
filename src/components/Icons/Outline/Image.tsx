
import Image from "../../../assets/outline/Image.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ImageIcon({ className, dataTestid = "ImageIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Image data-testid={dataTestid} className={classes} {...rest} />
  );
}
