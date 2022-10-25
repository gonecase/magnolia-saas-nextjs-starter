import { DefaultCard } from "../components/organisms/Card/Card"

const mock = {
  featuredImage: 'xxxx',
  title: 'A Title',
  categories: [{title: "Sports", url: '/sports'}],
  excerpt: 'lorem ipsum dolor',
  slug: '/a-title',
  id: '234567890'
}

const Story = (props) => <DefaultCard {...props} />

// Here we export a variant of the default template passing props
export const CardStory = Story.bind({})
CardStory.args = {
  ...mock,
};

// Here we export a variant of the default template passing props
// export const EmptyArticleStory = Story.bind({})
// EmptyArticleStory.args = {
//   article: null,
// };

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Card',
  component: DefaultCard,
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
};