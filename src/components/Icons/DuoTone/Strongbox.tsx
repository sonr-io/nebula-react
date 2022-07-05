
import Strongbox from "../../../assets/duotone/Strongbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function StrongboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Strongbox data-testid="StrongboxIcon" className={classes} />
  );
}
