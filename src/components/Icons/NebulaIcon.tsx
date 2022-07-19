
import { Suspense } from "react";
import { NebulaIconProps } from "../../types/iconProps";

import * as FilledIcons from "./Filled";
import * as OutlineIcons from "./Outline";
import * as DuotoneIcons from "./DuoTone";

const cx = require('classnames');
const icon = {
  'filled': FilledIcons,
  'duotone': OutlineIcons,
  'outline': DuotoneIcons,
}

export const NebulaIcon: React.FC<NebulaIconProps> = ({ className, iconName, iconType = 'filled', dataTestid = 'nebula-icon', ...rest }) => {
  const classes = cx("w-4 h-4", className);
  const Icon = icon[iconType][iconName];

  return (
    <Suspense fallback={<></>}>
      <Icon data-testid={dataTestid} className={classes} {...rest} />
    </Suspense>
  );
}
