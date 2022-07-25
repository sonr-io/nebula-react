
import PlayAdd from "../../../assets/outline/PlayAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayAddIcon({ className, dataTestid = "PlayAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PlayAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
