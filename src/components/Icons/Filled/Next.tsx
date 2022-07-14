
import Next from "../../../assets/filled/Next.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Next} data-testid="NextIcon" className={classes} />
  );
}
