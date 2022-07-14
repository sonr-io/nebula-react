
import VolumeLow1 from "../../../assets/duotone/VolumeLow1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeLow1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VolumeLow1} data-testid="VolumeLow1Icon" className={classes} />
  );
}
