
import RepeateMusic from "../../../assets/outline/RepeateMusic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeateMusicIcon({ className, dataTestid = "RepeateMusicIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RepeateMusic data-testid={dataTestid} className={classes} {...rest} />
  );
}
