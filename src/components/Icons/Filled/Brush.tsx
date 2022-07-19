
import Brush from "../../../assets/filled/Brush.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrushIcon({ className, dataTestid = "BrushIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Brush data-testid={dataTestid} className={classes} {...rest} />
  );
}
