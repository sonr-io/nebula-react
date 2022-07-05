
import Slash from "../../../assets/filled/Slash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Slash data-testid="SlashIcon" className={classes} />
  );
}
