
import Brush4 from "../../../assets/filled/Brush4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush4Icon({ className, dataTestid = "Brush4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Brush4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
