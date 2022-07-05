
import Medal from "../../../assets/duotone/Medal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MedalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Medal data-testid="MedalIcon" className={classes} />
  );
}
