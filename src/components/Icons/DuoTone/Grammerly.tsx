
import Grammerly from "../../../assets/duotone/Grammerly.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GrammerlyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Grammerly} data-testid="GrammerlyIcon" className={classes} />
  );
}
