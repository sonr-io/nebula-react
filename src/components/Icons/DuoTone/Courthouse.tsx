
import Courthouse from "../../../assets/duotone/Courthouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CourthouseIcon({ className, dataTestid = "CourthouseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Courthouse data-testid={dataTestid} className={classes} {...rest} />
  );
}
