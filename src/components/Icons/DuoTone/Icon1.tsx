
import Icon1 from "../../../assets/duotone/Icon1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Icon1Icon({ className, dataTestid = "Icon1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Icon1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
