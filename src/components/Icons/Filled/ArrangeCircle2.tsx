
import ArrangeCircle2 from "../../../assets/filled/ArrangeCircle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeCircle2Icon({ className, dataTestid = "ArrangeCircle2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrangeCircle2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
