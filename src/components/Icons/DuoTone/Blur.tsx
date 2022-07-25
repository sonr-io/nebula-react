
import Blur from "../../../assets/duotone/Blur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BlurIcon({ className, dataTestid = "BlurIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Blur data-testid={dataTestid} className={classes} {...rest} />
  );
}
