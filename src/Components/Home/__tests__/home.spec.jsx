import { render } from '@testing-library/react'
import Home from '../Home'

describe('<Home/>', ()=> {
    it('Should render home component', () => {
        const props = {
            ip: 'test IP'
        }
        const { asFragment } = render(<Home {...props} />)
        expect(asFragment()).toMatchSnapshot()
    })
})