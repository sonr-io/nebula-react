
import MusicCircle from "../../../assets/duotone/MusicCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicCircleIcon({ className, dataTestid = "MusicCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
