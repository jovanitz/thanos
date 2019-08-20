import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

configure({ adapter: new Adapter() });
// chai.use(chaiEnzyme());

require.extensions['.scss'] = function () {
    return null;
};

require.extensions['.svg'] = function () {
    return null;
};