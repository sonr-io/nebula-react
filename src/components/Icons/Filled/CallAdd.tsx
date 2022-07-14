
import CallAdd from "../../../assets/filled/CallAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallAdd data-testid="CallAddIcon" className={classes} />
  );
}
