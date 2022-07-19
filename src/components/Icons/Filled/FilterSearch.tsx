
import FilterSearch from "../../../assets/filled/FilterSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterSearchIcon({ className, dataTestid = "FilterSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
