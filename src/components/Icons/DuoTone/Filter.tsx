
import Filter from "../../../assets/duotone/Filter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterIcon({ className, dataTestid = "FilterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Filter data-testid={dataTestid} className={classes} {...rest} />
  );
}
