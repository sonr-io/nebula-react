
import Element1 from "../../../assets/outline/Element1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Element1Icon({ className, dataTestid = "Element1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Element1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
