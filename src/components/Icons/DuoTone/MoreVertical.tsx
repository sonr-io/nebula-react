
import MoreVertical from "../../../assets/duotone/MoreVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreVerticalIcon({ className, dataTestid = "MoreVerticalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoreVertical data-testid={dataTestid} className={classes} {...rest} />
  );
}
