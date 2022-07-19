
import Diagram from "../../../assets/outline/Diagram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiagramIcon({ className, dataTestid = "DiagramIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Diagram data-testid={dataTestid} className={classes} {...rest} />
  );
}
