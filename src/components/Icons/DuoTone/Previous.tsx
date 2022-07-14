
import Previous from "../../../assets/duotone/Previous.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PreviousIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Previous} data-testid="PreviousIcon" className={classes} />
  );
}
