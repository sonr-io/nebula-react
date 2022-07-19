
import Broom from "../../../assets/filled/Broom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BroomIcon({ className, dataTestid = "BroomIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Broom data-testid={dataTestid} className={classes} {...rest} />
  );
}
