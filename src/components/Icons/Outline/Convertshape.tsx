
import Convertshape from "../../../assets/outline/Convertshape.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertshapeIcon({ className, dataTestid = "ConvertshapeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Convertshape data-testid={dataTestid} className={classes} {...rest} />
  );
}
