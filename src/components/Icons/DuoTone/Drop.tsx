
import Drop from "../../../assets/duotone/Drop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DropIcon({ className, dataTestid = "DropIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Drop data-testid={dataTestid} className={classes} {...rest} />
  );
}
