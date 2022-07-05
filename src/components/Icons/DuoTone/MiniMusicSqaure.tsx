
import MiniMusicSqaure from "../../../assets/duotone/MiniMusicSqaure.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MiniMusicSqaureIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MiniMusicSqaure data-testid="MiniMusicSqaureIcon" className={classes} />
  );
}
