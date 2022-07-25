
import FavoriteChart from "../../../assets/filled/FavoriteChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FavoriteChartIcon({ className, dataTestid = "FavoriteChartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FavoriteChart data-testid={dataTestid} className={classes} {...rest} />
  );
}
