
import HeartEdit from "../../../assets/filled/HeartEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartEdit data-testid="HeartEditIcon" className={classes} />
  );
}
