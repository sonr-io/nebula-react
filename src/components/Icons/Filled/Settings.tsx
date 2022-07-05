
import Settings from "../../../assets/filled/Settings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SettingsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Settings data-testid="SettingsIcon" className={classes} />
  );
}
