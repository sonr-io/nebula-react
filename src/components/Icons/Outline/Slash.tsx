
import Slash from "../../../assets/outline/Slash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Slash data-testid="SlashIcon" className={classes} />
  );
}
