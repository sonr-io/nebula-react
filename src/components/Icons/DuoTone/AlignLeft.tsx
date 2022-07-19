
import AlignLeft from "../../../assets/duotone/AlignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignLeftIcon({ className, dataTestid = "AlignLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
