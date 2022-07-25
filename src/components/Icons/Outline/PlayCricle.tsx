
import PlayCricle from "../../../assets/outline/PlayCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayCricleIcon({ className, dataTestid = "PlayCricleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PlayCricle data-testid={dataTestid} className={classes} {...rest} />
  );
}
