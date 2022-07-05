
import Windows from "../../../assets/filled/Windows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WindowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Windows data-testid="WindowsIcon" className={classes} />
  );
}
