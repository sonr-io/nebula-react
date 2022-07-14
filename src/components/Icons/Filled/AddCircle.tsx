
import AddCircle from "../../../assets/filled/AddCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={AddCircle} data-testid="AddCircleIcon" className={classes} />
  );
}
