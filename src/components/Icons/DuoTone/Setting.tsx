
import Setting from "../../../assets/duotone/Setting.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SettingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Setting data-testid="SettingIcon" className={classes} />
  );
}