import type { KanbanDataItemProps } from "@/components/DataDisplay/Kanban/Kanban";
import { getConfig, HEADER_HEIGHT, HEIGHT_LINE_BODY3 } from "@/components/DataDisplay/Kanban/utils/config";

const computeKanbanCardHeight = (item: KanbanDataItemProps): number => {
  const hasHeader = !!item.headerTitle;
  const hasSubtitles = !!item.subtitles?.length;
  const hasFooter = !!(item.Footer || item.RightFooter);
  const hasRightFooter = !!item.RightFooter;

  const { footerHeight, baseHeight } = getConfig(hasHeader, hasSubtitles, hasFooter, hasRightFooter);

  const headerHeight = hasHeader ? HEADER_HEIGHT : 0;
  const subtitlesHeight = (item.subtitles?.length ?? 0) * HEIGHT_LINE_BODY3;

  return baseHeight + headerHeight + subtitlesHeight + footerHeight;
};

export default computeKanbanCardHeight;
