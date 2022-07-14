
import BoxRemove from "../../../assets/filled/BoxRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BoxRemove} data-testid="BoxRemoveIcon" className={classes} />
  );
}
