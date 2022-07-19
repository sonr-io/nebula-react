
import CpuSetting from "../../../assets/outline/CpuSetting.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuSettingIcon({ className, dataTestid = "CpuSettingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CpuSetting data-testid={dataTestid} className={classes} {...rest} />
  );
}
