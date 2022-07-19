
import Wind2 from "../../../assets/duotone/Wind2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wind2Icon({ className, dataTestid = "Wind2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wind2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
