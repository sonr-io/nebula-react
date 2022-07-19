
import Decred from "../../../assets/outline/Decred.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DecredIcon({ className, dataTestid = "DecredIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Decred data-testid={dataTestid} className={classes} {...rest} />
  );
}
