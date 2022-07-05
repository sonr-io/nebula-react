
import VolumeUp from "../../../assets/filled/VolumeUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VolumeUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeUp data-testid="VolumeUpIcon" className={classes} />
  );
}
