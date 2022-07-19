
import Xd from "../../../assets/filled/Xd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function XdIcon({ className, dataTestid = "XdIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Xd data-testid={dataTestid} className={classes} {...rest} />
  );
}
