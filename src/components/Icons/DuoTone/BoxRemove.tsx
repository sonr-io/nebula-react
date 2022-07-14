
import BoxRemove from "../../../assets/duotone/BoxRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxRemove data-testid="BoxRemoveIcon" className={classes} />
  );
}
