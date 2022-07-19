
import Hierarchy3 from "../../../assets/duotone/Hierarchy3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hierarchy3Icon({ className, dataTestid = "Hierarchy3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hierarchy3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
