
import Harmony from "../../../assets/duotone/Harmony.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HarmonyIcon({ className, dataTestid = "HarmonyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Harmony data-testid={dataTestid} className={classes} {...rest} />
  );
}
