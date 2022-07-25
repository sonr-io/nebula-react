
import Heart from "../../../assets/filled/Heart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartIcon({ className, dataTestid = "HeartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Heart data-testid={dataTestid} className={classes} {...rest} />
  );
}
