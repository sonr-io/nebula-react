
import Shapes from "../../../assets/filled/Shapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShapesIcon({ className, dataTestid = "ShapesIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Shapes data-testid={dataTestid} className={classes} {...rest} />
  );
}
