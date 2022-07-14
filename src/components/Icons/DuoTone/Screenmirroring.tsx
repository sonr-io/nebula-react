
import Screenmirroring from "../../../assets/duotone/Screenmirroring.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScreenmirroringIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Screenmirroring} data-testid="ScreenmirroringIcon" className={classes} />
  );
}
