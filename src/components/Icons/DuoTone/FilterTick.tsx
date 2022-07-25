
import FilterTick from "../../../assets/duotone/FilterTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterTickIcon({ className, dataTestid = "FilterTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FilterTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
