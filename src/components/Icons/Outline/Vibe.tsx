
import Vibe from "../../../assets/outline/Vibe.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VibeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Vibe} data-testid="VibeIcon" className={classes} />
  );
}
