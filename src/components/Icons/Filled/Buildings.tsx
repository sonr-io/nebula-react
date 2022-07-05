
import Buildings from "../../../assets/filled/Buildings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BuildingsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Buildings data-testid="BuildingsIcon" className={classes} />
  );
}
