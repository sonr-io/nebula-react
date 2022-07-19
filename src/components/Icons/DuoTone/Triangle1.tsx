
import Triangle1 from "../../../assets/duotone/Triangle1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Triangle1Icon({ className, dataTestid = "Triangle1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Triangle1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
