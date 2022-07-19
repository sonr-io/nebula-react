
import Bootstrap from "../../../assets/filled/Bootstrap.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BootstrapIcon({ className, dataTestid = "BootstrapIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bootstrap data-testid={dataTestid} className={classes} {...rest} />
  );
}
