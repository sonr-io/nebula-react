
import Reserve from "../../../assets/filled/Reserve.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReserveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Reserve data-testid="ReserveIcon" className={classes} />
  );
}
