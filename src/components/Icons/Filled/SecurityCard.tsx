
import SecurityCard from "../../../assets/filled/SecurityCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityCardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SecurityCard} data-testid="SecurityCardIcon" className={classes} />
  );
}
