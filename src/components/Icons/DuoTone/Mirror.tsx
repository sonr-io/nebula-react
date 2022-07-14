
import Mirror from "../../../assets/duotone/Mirror.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MirrorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mirror data-testid="MirrorIcon" className={classes} />
  );
}
