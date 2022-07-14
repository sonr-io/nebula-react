
import Frame2 from "../../../assets/duotone/Frame2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame2 data-testid="Frame2Icon" className={classes} />
  );
}
