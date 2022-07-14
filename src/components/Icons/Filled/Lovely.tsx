
import Lovely from "../../../assets/filled/Lovely.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LovelyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lovely data-testid="LovelyIcon" className={classes} />
  );
}
