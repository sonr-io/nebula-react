
import FilterRemove from "../../../assets/filled/FilterRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterRemoveIcon({ className, dataTestid = "FilterRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
