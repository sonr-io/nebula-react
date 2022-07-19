
import MirroringScreen from "../../../assets/duotone/MirroringScreen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MirroringScreenIcon({ className, dataTestid = "MirroringScreenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MirroringScreen data-testid={dataTestid} className={classes} {...rest} />
  );
}
