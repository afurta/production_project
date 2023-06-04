import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'shared/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => < CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
