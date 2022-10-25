const Article = (props) => {
  return <code>{JSON.stringify(props)}</code>
}

const articleMock = {
  id: 3,
  author: 'Dave Canterbury',
  company: 'Bushcraft 101',
  image_url: 'https://via.placeholder.com/200/200',
  content: 'David Michael Canterbury born September 19, 1963 is a survival expert',
  showImage: true
}

const Story = (props) => <Article {...props} />

// Here we export a variant of the default template passing props
export const ArticleStory = Story.bind({})
ArticleStory.args = {
  ...articleMock,
};

// Here we export a variant of the default template passing props
// export const EmptyArticleStory = Story.bind({})
// EmptyArticleStory.args = {
//   article: null,
// };

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Article',
  component: Article,
  argTypes: {
    showImage: { control: 'boolean' },
  },
};