
import Augur from "../../../assets/filled/Augur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AugurIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Augur} data-testid="AugurIcon" className={classes} />
  );
}
