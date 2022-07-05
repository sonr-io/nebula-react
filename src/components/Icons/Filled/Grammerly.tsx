
import Grammerly from "../../../assets/filled/Grammerly.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GrammerlyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grammerly data-testid="GrammerlyIcon" className={classes} />
  );
}
