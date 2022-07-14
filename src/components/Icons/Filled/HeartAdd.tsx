
import HeartAdd from "../../../assets/filled/HeartAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartAdd data-testid="HeartAddIcon" className={classes} />
  );
}
