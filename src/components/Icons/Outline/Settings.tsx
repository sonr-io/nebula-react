
import Settings from "../../../assets/outline/Settings.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SettingsIcon({ className, dataTestid = "SettingsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Settings data-testid={dataTestid} className={classes} {...rest} />
  );
}
