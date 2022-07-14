
import ConvertCard from "../../../assets/duotone/ConvertCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertCardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ConvertCard} data-testid="ConvertCardIcon" className={classes} />
  );
}
