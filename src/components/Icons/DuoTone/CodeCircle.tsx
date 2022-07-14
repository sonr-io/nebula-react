
import CodeCircle from "../../../assets/duotone/CodeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CodeCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CodeCircle data-testid="CodeCircleIcon" className={classes} />
  );
}
