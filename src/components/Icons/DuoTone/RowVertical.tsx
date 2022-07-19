
import RowVertical from "../../../assets/duotone/RowVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RowVerticalIcon({ className, dataTestid = "RowVerticalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RowVertical data-testid={dataTestid} className={classes} {...rest} />
  );
}
