
import CpuSetting from "../../../assets/duotone/CpuSetting.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CpuSettingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CpuSetting data-testid="CpuSettingIcon" className={classes} />
  );
}
