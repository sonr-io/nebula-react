
import Xrp from "../../../assets/filled/Xrp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function XrpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Xrp data-testid="XrpIcon" className={classes} />
  );
}
