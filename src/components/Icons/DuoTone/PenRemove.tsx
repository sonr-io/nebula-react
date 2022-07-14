
import PenRemove from "../../../assets/duotone/PenRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenRemove data-testid="PenRemoveIcon" className={classes} />
  );
}
