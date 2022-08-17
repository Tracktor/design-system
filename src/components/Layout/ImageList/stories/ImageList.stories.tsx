import { Box, IconButton, ImageListItem, ImageListItemBar, ListSubheader, SvgIcon } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageList from "./ImageList";

const itemData = [
  {
    cols: 2,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    rows: 2,
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    cols: 2,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    cols: 2,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    author: "@arwinneil",
    cols: 2,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    rows: 2,
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    cols: 2,
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    rows: 2,
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    cols: 2,
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const MasonryitemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const Template: ComponentStory<typeof ImageList> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <ImageList {...args}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

const srcset = (image: string, size: number, rows = 1, cols = 1) => ({
  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
});

const TemplateQuilted: ComponentStory<typeof ImageList> = (args) => (
  <Box alignItems="center" justifyContent="center" height="100%" display="flex">
    <ImageList sx={{ height: 450, width: 500 }} rowHeight={121} {...args}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

const MasonryTemplate: ComponentStory<typeof ImageList> = (args) => (
  <Box justifyContent="center" height="100%" display="flex">
    <ImageList {...args}>
      {MasonryitemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

const TitleBarTemplate: ComponentStory<typeof ImageList> = (args) => (
  <Box justifyContent="center" height="100%" display="flex">
    <ImageList sx={{ height: 450, width: 500 }} {...args}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
              <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${item.title}`}>
                <SvgIcon>
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="InfoIcon"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </SvgIcon>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  cols: 3,
  rowHeight: 164,
};

export const Quilted = TemplateQuilted.bind({});
Quilted.args = {
  cols: 4,
  variant: "quilted",
};

export const Masonry = MasonryTemplate.bind({});
Masonry.args = {
  cols: 3,
  gap: 8,
  variant: "masonry",
};

export const WithTitleBar = TitleBarTemplate.bind({});
WithTitleBar.args = {
  cols: 2,
};

export default {
  component: ImageList,
  title: "Components/Layout/ImageList",
} as ComponentMeta<typeof ImageList>;
