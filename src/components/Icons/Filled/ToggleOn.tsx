
import ToggleOn from "../../../assets/filled/ToggleOn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOnIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ToggleOn data-testid="ToggleOnIcon" className={classes} />
  );
}
