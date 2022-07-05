
import ProfileRemove from "../../../assets/filled/ProfileRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileRemove data-testid="ProfileRemoveIcon" className={classes} />
  );
}
