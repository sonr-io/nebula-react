
import VolumeLow from "../../../assets/filled/VolumeLow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeLowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VolumeLow} data-testid="VolumeLowIcon" className={classes} />
  );
}
