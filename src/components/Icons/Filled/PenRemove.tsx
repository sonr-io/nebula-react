
import PenRemove from "../../../assets/filled/PenRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PenRemove} data-testid="PenRemoveIcon" className={classes} />
  );
}
