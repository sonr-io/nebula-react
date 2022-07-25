
import MiniMusicSqaure from "../../../assets/outline/MiniMusicSqaure.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MiniMusicSqaureIcon({ className, dataTestid = "MiniMusicSqaureIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MiniMusicSqaure data-testid={dataTestid} className={classes} {...rest} />
  );
}
