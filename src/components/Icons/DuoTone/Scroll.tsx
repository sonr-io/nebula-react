
import Scroll from "../../../assets/duotone/Scroll.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScrollIcon({ className, dataTestid = "ScrollIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Scroll data-testid={dataTestid} className={classes} {...rest} />
  );
}
