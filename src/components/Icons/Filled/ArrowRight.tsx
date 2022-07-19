
import ArrowRight from "../../../assets/filled/ArrowRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRightIcon({ className, dataTestid = "ArrowRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
