
import Convertshape2 from "../../../assets/outline/Convertshape2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Convertshape2Icon({ className, dataTestid = "Convertshape2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Convertshape2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
