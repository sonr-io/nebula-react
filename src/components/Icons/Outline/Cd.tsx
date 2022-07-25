
import Cd from "../../../assets/outline/Cd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CdIcon({ className, dataTestid = "CdIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cd data-testid={dataTestid} className={classes} {...rest} />
  );
}
