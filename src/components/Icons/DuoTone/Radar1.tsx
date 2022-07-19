
import Radar1 from "../../../assets/duotone/Radar1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Radar1Icon({ className, dataTestid = "Radar1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Radar1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
