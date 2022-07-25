
import FolderMinus from "../../../assets/outline/FolderMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderMinusIcon({ className, dataTestid = "FolderMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FolderMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
