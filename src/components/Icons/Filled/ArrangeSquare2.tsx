
import ArrangeSquare2 from "../../../assets/filled/ArrangeSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeSquare2Icon({ className, dataTestid = "ArrangeSquare2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrangeSquare2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
