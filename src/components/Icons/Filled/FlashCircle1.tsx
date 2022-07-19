
import FlashCircle1 from "../../../assets/filled/FlashCircle1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashCircle1Icon({ className, dataTestid = "FlashCircle1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FlashCircle1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
