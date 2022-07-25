
import FilterEdit from "../../../assets/outline/FilterEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterEditIcon({ className, dataTestid = "FilterEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
