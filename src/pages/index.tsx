import * as React from 'react'
import Heading from 'components/reusable/Heading'
import Paragraph from 'components/reusable/Paragraph'

const IndexPage: React.FC = () => (
  <>
    <Heading size={[3, 5, 7, 9, 11]} tag="h1">
      Hello world
    </Heading>
    <Paragraph size={[2, 3, 4, 5, 6]}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut ea
      quidem alias. Repellat minima possimus architecto quam vel maxime!
    </Paragraph>
  </>
)

export default IndexPage
