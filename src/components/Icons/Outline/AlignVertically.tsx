
import AlignVertically from "../../../assets/outline/AlignVertically.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignVerticallyIcon({ className, dataTestid = "AlignVerticallyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignVertically data-testid={dataTestid} className={classes} {...rest} />
  );
}
