
import MiniMusicSqaure from "../../../assets/outline/MiniMusicSqaure.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MiniMusicSqaureIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MiniMusicSqaure data-testid="MiniMusicSqaureIcon" className={classes} />
  );
}
