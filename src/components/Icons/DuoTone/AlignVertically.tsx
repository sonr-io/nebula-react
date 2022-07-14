
import AlignVertically from "../../../assets/duotone/AlignVertically.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignVerticallyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignVertically data-testid="AlignVerticallyIcon" className={classes} />
  );
}
