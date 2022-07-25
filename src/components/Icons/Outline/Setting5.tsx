
import Setting5 from "../../../assets/outline/Setting5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting5Icon({ className, dataTestid = "Setting5Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Setting5 data-testid={dataTestid} className={classes} {...rest} />
  );
}
