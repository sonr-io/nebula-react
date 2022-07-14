
import MusicCircle from "../../../assets/duotone/MusicCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicCircle} data-testid="MusicCircleIcon" className={classes} />
  );
}
