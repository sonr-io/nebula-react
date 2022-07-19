
import Money3 from "../../../assets/outline/Money3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Money3Icon({ className, dataTestid = "Money3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Money3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
