
import Blend2 from "../../../assets/outline/Blend2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Blend2Icon({ className, dataTestid = "Blend2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Blend2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
