
import ArrowRight4 from "../../../assets/filled/ArrowRight4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight4Icon({ className, dataTestid = "ArrowRight4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowRight4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
