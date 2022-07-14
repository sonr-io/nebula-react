
import Eos from "../../../assets/duotone/Eos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EosIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Eos} data-testid="EosIcon" className={classes} />
  );
}
