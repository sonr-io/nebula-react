
import Global from "../../../assets/filled/Global.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GlobalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Global data-testid="GlobalIcon" className={classes} />
  );
}
