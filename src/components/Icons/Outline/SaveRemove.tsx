
import SaveRemove from "../../../assets/outline/SaveRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SaveRemove} data-testid="SaveRemoveIcon" className={classes} />
  );
}
