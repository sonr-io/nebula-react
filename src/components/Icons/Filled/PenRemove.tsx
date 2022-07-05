
import PenRemove from "../../../assets/filled/PenRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PenRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenRemove data-testid="PenRemoveIcon" className={classes} />
  );
}
