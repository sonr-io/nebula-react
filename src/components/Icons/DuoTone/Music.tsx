
import Music from "../../../assets/duotone/Music.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Music} data-testid="MusicIcon" className={classes} />
  );
}
