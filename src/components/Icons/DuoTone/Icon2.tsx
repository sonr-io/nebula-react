
import Icon2 from "../../../assets/duotone/Icon2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Icon2Icon({ className, dataTestid = "Icon2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Icon2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
