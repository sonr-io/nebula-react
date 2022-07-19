
import Brush1 from "../../../assets/filled/Brush1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush1Icon({ className, dataTestid = "Brush1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Brush1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
