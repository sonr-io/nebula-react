
import ProfileRemove from "../../../assets/duotone/ProfileRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileRemove data-testid="ProfileRemoveIcon" className={classes} />
  );
}
