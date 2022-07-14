
import Harmony from "../../../assets/duotone/Harmony.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HarmonyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Harmony} data-testid="HarmonyIcon" className={classes} />
  );
}
