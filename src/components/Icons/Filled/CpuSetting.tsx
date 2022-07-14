
import CpuSetting from "../../../assets/filled/CpuSetting.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CpuSettingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CpuSetting} data-testid="CpuSettingIcon" className={classes} />
  );
}
