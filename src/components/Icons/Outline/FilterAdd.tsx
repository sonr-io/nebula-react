
import FilterAdd from "../../../assets/outline/FilterAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterAddIcon({ className, dataTestid = "FilterAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
