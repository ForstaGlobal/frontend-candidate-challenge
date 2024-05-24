/** @jest-environment jsdom */
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  it('should render correctly and match snapshot', () => {
    const wrapper = shallow(<TodoList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
