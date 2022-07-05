
import Setting from "../../../assets/filled/Setting.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SettingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Setting data-testid="SettingIcon" className={classes} />
  );
}
