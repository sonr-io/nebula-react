
import ProfileAdd from "../../../assets/filled/ProfileAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ProfileAdd} data-testid="ProfileAddIcon" className={classes} />
  );
}
