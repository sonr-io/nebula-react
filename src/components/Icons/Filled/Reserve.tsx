
import Reserve from "../../../assets/filled/Reserve.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReserveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Reserve} data-testid="ReserveIcon" className={classes} />
  );
}
