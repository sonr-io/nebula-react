
import MoreVertical from "../../../assets/filled/MoreVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoreVertical data-testid="MoreVerticalIcon" className={classes} />
  );
}
