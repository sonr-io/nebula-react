
import FlashCircle from "../../../assets/filled/FlashCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashCircleIcon({ className, dataTestid = "FlashCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FlashCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
