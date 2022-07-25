
import Eraser from "../../../assets/filled/Eraser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EraserIcon({ className, dataTestid = "EraserIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Eraser data-testid={dataTestid} className={classes} {...rest} />
  );
}
