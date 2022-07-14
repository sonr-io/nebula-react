
import ProfileRemove from "../../../assets/filled/ProfileRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ProfileRemove} data-testid="ProfileRemoveIcon" className={classes} />
  );
}
