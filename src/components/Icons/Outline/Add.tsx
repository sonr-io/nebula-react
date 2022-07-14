
import Add from "../../../assets/outline/Add.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Add} data-testid="AddIcon" className={classes} />
  );
}
