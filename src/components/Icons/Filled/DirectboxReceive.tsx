
import DirectboxReceive from "../../../assets/filled/DirectboxReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxReceiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectboxReceive} data-testid="DirectboxReceiveIcon" className={classes} />
  );
}
