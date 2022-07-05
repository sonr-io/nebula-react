
import ProfileDelete from "../../../assets/duotone/ProfileDelete.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileDeleteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileDelete data-testid="ProfileDeleteIcon" className={classes} />
  );
}
