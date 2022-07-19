
import ArrowRight2 from "../../../assets/duotone/ArrowRight2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight2Icon({ className, dataTestid = "ArrowRight2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowRight2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
