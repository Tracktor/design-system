import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import {
  advancedKanbanDataGenerator,
  customChipStatusMappingData,
  customSubtitlesData,
  KANBAN_ANIMATED_ITEM_TEMPLATES,
  KANBAN_ITEM_TEMPLATES,
  loadingColumnData,
  simpleDataGenerator,
  subtitleActionsData,
} from "@/components/DataDisplay/Kanban/stories/dataStories";
import Kanban from "../Kanban";

const Template: StoryFn<typeof Kanban> = (args) => (
  <Stack flex={1} minHeight={0} height="100%">
    <Kanban {...args} />
  </Stack>
);

export const SingleColumnDefaultTasks = Template.bind({});
SingleColumnDefaultTasks.args = {
  data: simpleDataGenerator(1, {
    itemsPerColumn: [2],
  }),
};

export const TwoColumnsBasic = Template.bind({});
TwoColumnsBasic.args = {
  data: simpleDataGenerator(2, {
    itemsPerColumn: [1, 1],
  }),
};

export const MixedColumnsWithEmpty = Template.bind({});
MixedColumnsWithEmpty.args = {
  data: simpleDataGenerator(2, {
    itemsPerColumn: [0, 1],
  }),
};

export const BookingStatusColumns = Template.bind({});
BookingStatusColumns.args = {
  data: simpleDataGenerator(3, {
    itemsPerColumn: [2, 1, 0],
    statuses: [
      { label: "Validated", name: "validated" },
      { label: "Confirmed", name: "confirmed" },
      { label: "Started", name: "started" },
    ],
  }),
};

export const DealDataKanban = Template.bind({});
DealDataKanban.args = {
  data: advancedKanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [2, 1, 1],
    itemTemplates: KANBAN_ITEM_TEMPLATES,
    statuses: [
      { label: "Validé", name: "validated" },
      { label: "Confirmé", name: "confirmed" },
      { label: "Terminé", name: "ended" },
    ],
  }),
};

export const FullyFilledCardsThreeColumns = Template.bind({});
FullyFilledCardsThreeColumns.args = {
  data: advancedKanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [32, 45, 13],
    itemTemplates: KANBAN_ANIMATED_ITEM_TEMPLATES,
    statuses: [
      { label: "To Do", name: "todo" },
      { label: "In Progress", name: "inprogress" },
      { label: "Done", name: "done" },
    ],
  }),
};

export const StatusFlowSimulation = Template.bind({});
StatusFlowSimulation.args = {
  data: advancedKanbanDataGenerator(5, {
    alternateReverse: false,
    itemsPerColumn: [0, 1, 1, 1, 1],
    itemTemplates: [
      {
        headerTitle: "Custom Header Content",
        image: undefined,
        tag: "Task",
        title: "Booking in progress",
      },
    ],
    statuses: [
      { label: "Validated", name: "validated" },
      { label: "Confirmed", name: "confirmed" },
      { label: "Started", name: "started" },
      { label: "Ended", name: "ended" },
      { label: "Canceled", name: "canceled" },
    ],
  }),
};

export const LoadingColumns = Template.bind({});
LoadingColumns.args = { data: loadingColumnData };

export const WithCustomChipStatusMapping = Template.bind({});
WithCustomChipStatusMapping.args = {
  data: customChipStatusMappingData,
  headerColumnChip: {
    archivedItem: { color: "error", variant: "outlined" },
    draft: { color: "warning", variant: "filled" },
    review: { color: "info", variant: "filled" },
  },
};

export const SubtitleActions = Template.bind({});
SubtitleActions.args = {
  data: subtitleActionsData,
  onClickItem: () => alert(`Clicked on item`),
};

export const CustomSubtitles = Template.bind({});
CustomSubtitles.args = {
  data: customSubtitlesData,
  onClickItem: () => alert(`Clicked on item`),
};

export const EmptyStateKanban = Template.bind({});
EmptyStateKanban.args = {
  data: [],
  emptyState: {
    buttonText: "Create your first item",
    description: "There are currently no items to display in this Kanban board.",
    title: "No items available",
  },
};

export default {
  args: {
    // Pass void functions for required callbacks, otherwise Storybook will complain
    onColumnInView: () => {},
  },
  component: Kanban,
  parameters: {
    docs: {
      description: {
        component: "Kanban component for displaying tasks in columns.",
      },
    },
  },
  title: "Components/Data Display/Kanban",
} as Meta<typeof Kanban>;
