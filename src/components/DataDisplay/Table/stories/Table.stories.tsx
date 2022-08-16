import { Box, Button, Collapse, Paper, Stack, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Table from "./Table";

const createData = (name: string, calories: number, fat: number, carbs: number, protein: number, price: number) => ({
  calories,
  carbs,
  fat,
  history: [
    {
      amount: 3,
      customerId: "11091700",
      date: "2020-01-05",
    },
    {
      amount: 1,
      customerId: "Anonymous",
      date: "2020-01-02",
    },
  ],
  name,
  price,
  protein,
});

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <Button aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? "-" : "+"}
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Template: ComponentStory<typeof Table> = (args) => {
  const { stickyHeader } = args;

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer component={Paper} sx={{ maxHeight: stickyHeader ? 250 : "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const TemplateColumnGrouping: ComponentStory<typeof Table> = (args) => {
  const { stickyHeader } = args;

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer component={Paper} sx={{ maxHeight: stickyHeader ? 250 : "auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Name
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const TemplateCollapsible: ComponentStory<typeof Table> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" {...args}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Dense = Template.bind({});
Dense.args = {
  size: "small",
};

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  stickyHeader: true,
};

export const ColumnGrouping = TemplateColumnGrouping.bind({});
ColumnGrouping.args = {};

export const CollapsibleTable = TemplateCollapsible.bind({});
CollapsibleTable.args = {};

export default {
  component: Table,
  title: "Components/Data Display/Table",
} as ComponentMeta<typeof Table>;
