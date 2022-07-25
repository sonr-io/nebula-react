
import Screenmirroring from "../../../assets/filled/Screenmirroring.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScreenmirroringIcon({ className, dataTestid = "ScreenmirroringIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Screenmirroring data-testid={dataTestid} className={classes} {...rest} />
  );
}
