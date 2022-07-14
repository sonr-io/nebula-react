
import SafeHome from "../../../assets/duotone/SafeHome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SafeHomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SafeHome data-testid="SafeHomeIcon" className={classes} />
  );
}