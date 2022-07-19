
import Setting4 from "../../../assets/duotone/Setting4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting4Icon({ className, dataTestid = "Setting4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Setting4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
