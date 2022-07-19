
import Unlimited from "../../../assets/filled/Unlimited.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnlimitedIcon({ className, dataTestid = "UnlimitedIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Unlimited data-testid={dataTestid} className={classes} {...rest} />
  );
}
