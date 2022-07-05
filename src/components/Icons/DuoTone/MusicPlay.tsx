
import MusicPlay from "../../../assets/duotone/MusicPlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicPlayIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicPlay data-testid="MusicPlayIcon" className={classes} />
  );
}
