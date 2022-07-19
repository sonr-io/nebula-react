
import Buildings2 from "../../../assets/duotone/Buildings2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Buildings2Icon({ className, dataTestid = "Buildings2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Buildings2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
