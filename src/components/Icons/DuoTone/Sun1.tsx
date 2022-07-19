
import Sun1 from "../../../assets/duotone/Sun1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Sun1Icon({ className, dataTestid = "Sun1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sun1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
