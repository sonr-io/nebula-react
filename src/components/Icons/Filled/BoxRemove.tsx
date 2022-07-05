
import BoxRemove from "../../../assets/filled/BoxRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BoxRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxRemove data-testid="BoxRemoveIcon" className={classes} />
  );
}
