
import Sound from "../../../assets/outline/Sound.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SoundIcon({ className, dataTestid = "SoundIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sound data-testid={dataTestid} className={classes} {...rest} />
  );
}
