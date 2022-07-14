
import Wanchain from "../../../assets/duotone/Wanchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WanchainIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Wanchain} data-testid="WanchainIcon" className={classes} />
  );
}
