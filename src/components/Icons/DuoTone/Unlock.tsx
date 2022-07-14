
import Unlock from "../../../assets/duotone/Unlock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnlockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Unlock data-testid="UnlockIcon" className={classes} />
  );
}
