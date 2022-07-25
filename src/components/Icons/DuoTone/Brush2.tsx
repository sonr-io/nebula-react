
import Brush2 from "../../../assets/duotone/Brush2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush2Icon({ className, dataTestid = "Brush2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Brush2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
