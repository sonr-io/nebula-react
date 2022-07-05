
import FavoriteChart from "../../../assets/filled/FavoriteChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FavoriteChartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FavoriteChart data-testid="FavoriteChartIcon" className={classes} />
  );
}
