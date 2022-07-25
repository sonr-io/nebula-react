
import PlayCircle from "../../../assets/duotone/PlayCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayCircleIcon({ className, dataTestid = "PlayCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PlayCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
