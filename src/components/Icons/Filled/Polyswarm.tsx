
import Polyswarm from "../../../assets/filled/Polyswarm.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolyswarmIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Polyswarm data-testid="PolyswarmIcon" className={classes} />
  );
}
