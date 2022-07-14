
import VolumeUp from "../../../assets/duotone/VolumeUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VolumeUp} data-testid="VolumeUpIcon" className={classes} />
  );
}
