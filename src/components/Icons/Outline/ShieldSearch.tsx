
import ShieldSearch from "../../../assets/outline/ShieldSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSearchIcon({ className, dataTestid = "ShieldSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShieldSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
