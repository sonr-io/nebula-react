
import Eos from "../../../assets/filled/Eos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EosIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Eos data-testid="EosIcon" className={classes} />
  );
}
