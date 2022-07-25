
import Buildings from "../../../assets/duotone/Buildings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuildingsIcon({ className, dataTestid = "BuildingsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Buildings data-testid={dataTestid} className={classes} {...rest} />
  );
}
