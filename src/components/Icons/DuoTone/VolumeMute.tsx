
import VolumeMute from "../../../assets/duotone/VolumeMute.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeMuteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VolumeMute} data-testid="VolumeMuteIcon" className={classes} />
  );
}
