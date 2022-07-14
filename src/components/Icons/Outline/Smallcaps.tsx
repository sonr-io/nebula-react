
import Smallcaps from "../../../assets/outline/Smallcaps.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmallcapsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Smallcaps} data-testid="SmallcapsIcon" className={classes} />
  );
}
