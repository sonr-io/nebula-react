
import Lamp1 from "../../../assets/duotone/Lamp1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Lamp1Icon({ className, dataTestid = "Lamp1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lamp1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
