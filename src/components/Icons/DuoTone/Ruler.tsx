
import Ruler from "../../../assets/duotone/Ruler.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RulerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ruler} data-testid="RulerIcon" className={classes} />
  );
}
