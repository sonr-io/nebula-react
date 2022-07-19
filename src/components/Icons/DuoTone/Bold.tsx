
import Bold from "../../../assets/duotone/Bold.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoldIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bold data-testid="BoldIcon" className={classes} />
  );
}
