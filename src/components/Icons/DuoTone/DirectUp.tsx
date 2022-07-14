
import DirectUp from "../../../assets/duotone/DirectUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectUp data-testid="DirectUpIcon" className={classes} />
  );
}
