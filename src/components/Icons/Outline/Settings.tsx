
import Settings from "../../../assets/outline/Settings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SettingsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Settings data-testid="SettingsIcon" className={classes} />
  );
}
