
import FormatCircle from "../../../assets/duotone/FormatCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FormatCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FormatCircle data-testid="FormatCircleIcon" className={classes} />
  );
}
