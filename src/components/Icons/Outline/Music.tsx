
import Music from "../../../assets/outline/Music.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicIcon({ className, dataTestid = "MusicIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Music data-testid={dataTestid} className={classes} {...rest} />
  );
}
