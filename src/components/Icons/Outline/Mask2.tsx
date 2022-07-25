
import Mask2 from "../../../assets/outline/Mask2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Mask2Icon({ className, dataTestid = "Mask2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mask2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
