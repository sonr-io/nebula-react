
import Iost from "../../../assets/duotone/Iost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function IostIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Iost data-testid="IostIcon" className={classes} />
  );
}
