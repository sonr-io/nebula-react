
import Zel from "../../../assets/filled/Zel.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ZelIcon({ className, dataTestid = "ZelIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Zel data-testid={dataTestid} className={classes} {...rest} />
  );
}
