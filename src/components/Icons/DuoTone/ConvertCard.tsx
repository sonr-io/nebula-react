
import ConvertCard from "../../../assets/duotone/ConvertCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ConvertCardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ConvertCard data-testid="ConvertCardIcon" className={classes} />
  );
}
