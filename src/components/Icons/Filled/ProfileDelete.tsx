
import ProfileDelete from "../../../assets/filled/ProfileDelete.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileDeleteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileDelete data-testid="ProfileDeleteIcon" className={classes} />
  );
}
