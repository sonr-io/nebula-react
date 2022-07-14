
import Okb from "../../../assets/filled/Okb.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OkbIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Okb data-testid="OkbIcon" className={classes} />
  );
}
