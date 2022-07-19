
import Bold from "../../../assets/outline/Bold.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoldIcon({ className, dataTestid = "BoldIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bold data-testid={dataTestid} className={classes} {...rest} />
  );
}
