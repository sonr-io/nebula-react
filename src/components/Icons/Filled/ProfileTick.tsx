
import ProfileTick from "../../../assets/filled/ProfileTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ProfileTick} data-testid="ProfileTickIcon" className={classes} />
  );
}
