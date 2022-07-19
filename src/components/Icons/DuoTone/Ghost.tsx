
import Ghost from "../../../assets/duotone/Ghost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GhostIcon({ className, dataTestid = "GhostIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ghost data-testid={dataTestid} className={classes} {...rest} />
  );
}
