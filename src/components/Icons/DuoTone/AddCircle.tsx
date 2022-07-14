
import AddCircle from "../../../assets/duotone/AddCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AddCircle data-testid="AddCircleIcon" className={classes} />
  );
}
