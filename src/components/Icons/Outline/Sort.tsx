
import Sort from "../../../assets/outline/Sort.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SortIcon({ className, dataTestid = "SortIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sort data-testid={dataTestid} className={classes} {...rest} />
  );
}
