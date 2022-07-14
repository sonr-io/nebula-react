
import Instagram from "../../../assets/outline/Instagram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InstagramIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Instagram data-testid="InstagramIcon" className={classes} />
  );
}
