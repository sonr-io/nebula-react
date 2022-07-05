
import Screenmirroring from "../../../assets/duotone/Screenmirroring.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ScreenmirroringIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Screenmirroring data-testid="ScreenmirroringIcon" className={classes} />
  );
}
