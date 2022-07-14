
import VolumeCross from "../../../assets/filled/VolumeCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VolumeCross data-testid="VolumeCrossIcon" className={classes} />
  );
}
