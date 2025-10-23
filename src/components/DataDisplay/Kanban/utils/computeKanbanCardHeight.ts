import type { KanbanDataItemProps } from "@/components/DataDisplay/Kanban/Kanban";
import { getConfig } from "@/components/DataDisplay/Kanban/utils/config";

const computeKanbanCardHeight = (item: KanbanDataItemProps): number => {
  const hasHeader = !!item.headerTitle;
  const hasSubtitles = !!item.subtitles?.length;
  const hasFooter = !!(item.Footer || item.RightFooter);
  const hasRightFooter = !!item.RightFooter;

  const { footerHeight, baseHeight, headerHeight, subtitlesHeight } = getConfig(
    hasHeader,
    hasSubtitles,
    hasFooter,
    hasRightFooter,
    item.subtitles?.length,
  );

  return baseHeight + headerHeight + subtitlesHeight + footerHeight;
};

export default computeKanbanCardHeight;
