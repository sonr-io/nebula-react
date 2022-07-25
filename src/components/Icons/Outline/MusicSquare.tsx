
import MusicSquare from "../../../assets/outline/MusicSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareIcon({ className, dataTestid = "MusicSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
