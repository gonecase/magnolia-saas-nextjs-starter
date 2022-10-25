import Statistic from "../components/atoms/Statistic";

const mock = {
  label: 'xxxx',
  value: 'yyyy'
}

const Story = (props) => <Statistic {...props} />

// Here we export a variant of the default template passing props
export const StatisticStory = Story.bind({})
StatisticStory.args = {
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
  title: 'Statistic',
  component: Statistic,
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
};