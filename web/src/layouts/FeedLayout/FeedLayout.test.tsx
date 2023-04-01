import { render } from '@redwoodjs/testing/web'

import FeedLayout from './FeedLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeedLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedLayout />)
    }).not.toThrow()
  })
})
