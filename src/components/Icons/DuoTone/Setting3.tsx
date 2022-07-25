
import Setting3 from "../../../assets/duotone/Setting3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting3Icon({ className, dataTestid = "Setting3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Setting3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
