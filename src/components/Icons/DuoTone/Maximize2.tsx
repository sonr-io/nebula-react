
import Maximize2 from "../../../assets/duotone/Maximize2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize2Icon({ className, dataTestid = "Maximize2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
