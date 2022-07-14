
import SmartHome from "../../../assets/filled/SmartHome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmartHomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmartHome data-testid="SmartHomeIcon" className={classes} />
  );
}
