
import Cd from "../../../assets/duotone/Cd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CdIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cd} data-testid="CdIcon" className={classes} />
  );
}
