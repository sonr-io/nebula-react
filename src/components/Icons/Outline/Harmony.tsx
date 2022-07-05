
import Harmony from "../../../assets/outline/Harmony.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HarmonyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Harmony data-testid="HarmonyIcon" className={classes} />
  );
}
