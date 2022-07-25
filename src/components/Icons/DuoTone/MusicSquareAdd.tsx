
import MusicSquareAdd from "../../../assets/duotone/MusicSquareAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareAddIcon({ className, dataTestid = "MusicSquareAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicSquareAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
