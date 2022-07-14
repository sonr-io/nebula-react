
import Mobile from "../../../assets/filled/Mobile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MobileIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Mobile} data-testid="MobileIcon" className={classes} />
  );
}
