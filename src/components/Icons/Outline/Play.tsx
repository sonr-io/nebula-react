
import Play from "../../../assets/outline/Play.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayIcon({ className, dataTestid = "PlayIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Play data-testid={dataTestid} className={classes} {...rest} />
  );
}
