
import Snapchat from "../../../assets/filled/Snapchat.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SnapchatIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Snapchat data-testid="SnapchatIcon" className={classes} />
  );
}
