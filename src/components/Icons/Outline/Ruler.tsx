
import Ruler from "../../../assets/outline/Ruler.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RulerIcon({ className, dataTestid = "RulerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ruler data-testid={dataTestid} className={classes} {...rest} />
  );
}
