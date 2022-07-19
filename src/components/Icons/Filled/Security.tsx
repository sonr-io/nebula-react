
import Security from "../../../assets/filled/Security.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityIcon({ className, dataTestid = "SecurityIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Security data-testid={dataTestid} className={classes} {...rest} />
  );
}
