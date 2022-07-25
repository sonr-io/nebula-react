
import Shapes1 from "../../../assets/filled/Shapes1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Shapes1Icon({ className, dataTestid = "Shapes1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Shapes1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
