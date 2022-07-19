
import Vibe from "../../../assets/filled/Vibe.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VibeIcon({ className, dataTestid = "VibeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Vibe data-testid={dataTestid} className={classes} {...rest} />
  );
}
