
import MusicPlay from "../../../assets/outline/MusicPlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicPlayIcon({ className, dataTestid = "MusicPlayIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicPlay data-testid={dataTestid} className={classes} {...rest} />
  );
}
