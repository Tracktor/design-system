import type { Meta } from "@storybook/react-vite";
import InfiniteScrollTemplate from "@/components/DataDisplay/Kanban/stories/Templates/InfiniteScrollTemplate";
import {
  ACTION_ITEM_TEMPLATE,
  DEAL_ITEM_TEMPLATES,
  SUBTITLE_ITEM_TEMPLATES,
} from "@/components/DataDisplay/Kanban/stories/Templates/kanbanItemTemplate";
import Template from "@/components/DataDisplay/Kanban/stories/Templates/Template";
import { kanbanDataGenerator } from "@/components/DataDisplay/Kanban/stories/utils/kanbanDataGenerator";
import Kanban from "../Kanban";

export const SingleColumnDefaultTasks = Template.bind({});
SingleColumnDefaultTasks.args = {
  data: kanbanDataGenerator(1, {
    itemsPerColumn: [2],
  }),
};

export const TwoColumnsBasic = Template.bind({});
TwoColumnsBasic.args = {
  data: kanbanDataGenerator(2, {
    itemsPerColumn: [1, 1],
  }),
};

export const MixedColumnsWithEmpty = Template.bind({});
MixedColumnsWithEmpty.args = {
  data: kanbanDataGenerator(2, {
    itemsPerColumn: [0, 1],
  }),
};

export const BookingStatusColumns = Template.bind({});
BookingStatusColumns.args = {
  data: kanbanDataGenerator(3, {
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
  data: kanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [3, 2, 1],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "Validé", name: "validated" },
      { label: "Confirmé", name: "confirmed" },
      { label: "Terminé", name: "ended" },
    ],
  }),
};

export const FullyFilledCardsThreeColumns = Template.bind({});
FullyFilledCardsThreeColumns.args = {
  data: kanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [32, 45, 13],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "To Do", name: "todo" },
      { label: "In Progress", name: "inprogress" },
      { label: "Done", name: "done" },
    ],
  }),
};

export const FullyFilledCardsThreeColumnsSecondary = Template.bind({});
FullyFilledCardsThreeColumnsSecondary.args = {
  data: kanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [32, 45, 13],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "To Do", name: "todo" },
      { label: "In Progress", name: "inprogress" },
      { label: "Done", name: "done" },
    ],
  }),
  variant: "secondary",
};

export const StatusFlowSimulation = Template.bind({});
StatusFlowSimulation.args = {
  data: kanbanDataGenerator(5, {
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
LoadingColumns.args = {
  data: kanbanDataGenerator(2, {
    loadingColumns: [0, 1],
    statuses: [
      { label: "Validated", name: "validated" },
      { label: "Confirmed", name: "confirmed" },
    ],
  }),
};

export const WithCustomChipStatusMapping = Template.bind({});
WithCustomChipStatusMapping.args = {
  data: kanbanDataGenerator(3, {
    itemsPerColumn: [1, 1, 1],
    itemTemplates: [
      {
        image: undefined,
        tag: "Task",
        title: "Archived task",
      },
      {
        image: undefined,
        tag: "Task",
        title: "Draft task",
      },
      {
        image: undefined,
        tag: "Task",
        title: "In Review",
      },
    ],
    statuses: [
      { label: "Archived", name: "archivedItem" },
      { label: "Draft", name: "draft" },
      { label: "In Review", name: "review" },
    ],
  }),

  headerColumnChip: {
    archivedItem: { color: "error", variant: "outlined" },
    draft: { color: "warning", variant: "filled" },
    review: { color: "info", variant: "filled" },
  },
};

export const SubtitleActions = Template.bind({});
SubtitleActions.args = {
  data: kanbanDataGenerator(1, {
    itemsPerColumn: [2],
    itemTemplates: ACTION_ITEM_TEMPLATE,
    statuses: [
      {
        label: "Waiting for confirmation",
        name: "waiting_for_confirmation",
      },
    ],
  }),
  onClickItem: () => alert("Clicked on item"),
};

export const CustomSubtitles = Template.bind({});
CustomSubtitles.args = {
  data: kanbanDataGenerator(1, {
    itemsPerColumn: [1],
    itemTemplates: SUBTITLE_ITEM_TEMPLATES,
    statuses: [
      {
        label: "With tooltip",
        name: "with_tooltip",
      },
    ],
  }),

  onClickItem: () => alert("Clicked on item"),
};

export const InfiniteScrollPages = InfiniteScrollTemplate.bind({});
InfiniteScrollPages.args = {
  initialItemsPerColumn: 30,
  itemPerPage: 50,
};

export const ManyColumns = Template.bind({});
ManyColumns.args = {
  data: kanbanDataGenerator(8, {
    alternateReverse: true,
    itemsPerColumn: [20, 15, 30, 10, 25, 5, 18, 12],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "Brouillon", name: "quotation" },
      { label: "Demandé", name: "requested" },
      { label: "Validé", name: "validated" },
      { label: "Confirmé", name: "confirmed" },
      { label: "Démarré", name: "started" },
      { label: "En attente", name: "waiting_for_confirmation" },
      { label: "Terminé", name: "ended" },
      { label: "Annulé", name: "canceled" },
    ],
  }),
};

export const ActiveItem = Template.bind({});
ActiveItem.args = {
  activeItemId: "validated-1",
  data: kanbanDataGenerator(3, {
    alternateReverse: true,
    itemsPerColumn: [5, 5, 5],
    itemTemplates: DEAL_ITEM_TEMPLATES,
    statuses: [
      { label: "Validé", name: "validated" },
      { label: "Confirmé", name: "confirmed" },
      { label: "Terminé", name: "ended" },
    ],
  }),
};

export const TitleMultiLine = Template.bind({});
TitleMultiLine.args = {
  data: kanbanDataGenerator(2, {
    itemsPerColumn: [3, 3],
    itemTemplates: [
      {
        headerTitle: "Projet Alpha",
        image: "https://picsum.photos/seed/ml1/100/100",
        subtitle: { text: "Acme Corporation" },
        tag: "Urgent",
        title:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        titleLineClamp: 2,
      },
      {
        image: "https://picsum.photos/seed/ml2/100/100",
        subtitle: { text: "Design Team" },
        tag: "Medium",
        title:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
        titleLineClamp: 3,
      },
      {
        image: "https://picsum.photos/seed/ml3/100/100",
        tag: "Low",
        title: "Short",
      },
    ],
    statuses: [
      { label: "En cours", name: "inprogress" },
      { label: "Terminé", name: "done" },
    ],
  }),
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
