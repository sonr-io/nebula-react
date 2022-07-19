
import Maximize1 from "../../../assets/duotone/Maximize1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize1Icon({ className, dataTestid = "Maximize1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
