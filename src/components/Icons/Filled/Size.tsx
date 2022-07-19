
import Size from "../../../assets/filled/Size.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SizeIcon({ className, dataTestid = "SizeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Size data-testid={dataTestid} className={classes} {...rest} />
  );
}
