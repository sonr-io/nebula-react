
import BrifecaseTick from "../../../assets/filled/BrifecaseTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BrifecaseTick data-testid="BrifecaseTickIcon" className={classes} />
  );
}
