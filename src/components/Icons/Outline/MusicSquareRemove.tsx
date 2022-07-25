
import MusicSquareRemove from "../../../assets/outline/MusicSquareRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareRemoveIcon({ className, dataTestid = "MusicSquareRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicSquareRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
