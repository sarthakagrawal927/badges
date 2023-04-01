import type { ComponentMeta, ComponentStory } from '@storybook/react'

import FeedLayout from './FeedLayout'

export const generated: ComponentStory<typeof FeedLayout> = (args) => {
  return <FeedLayout {...args} />
}

export default {
  title: 'Layouts/FeedLayout',
  component: FeedLayout,
} as ComponentMeta<typeof FeedLayout>
