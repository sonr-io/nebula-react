
import Dribbble from "../../../assets/outline/Dribbble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DribbbleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dribbble data-testid="DribbbleIcon" className={classes} />
  );
}