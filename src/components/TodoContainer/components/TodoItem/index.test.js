import { shallow } from 'vue-test-utils'
import TodoItem from './'

describe('TodoItem', () => {
  it('renders a todo item', () => {
    const wrapper = shallow(TodoItem, {
      propsData: {
        todo: {
          text: 'Do work',
          completed: false
        }
      }
    });

    expect(wrapper.html().includes('Do work')).toBe(true);
  });

  it('assigns `completed`class to completed todo', () => {
    const wrapper = shallow(TodoItem, {
      propsData: {
        todo: {
          text: 'Do work',
          complete: true
        }
      }
    });

    expect(wrapper.classes()).toContain('completed');
  });
});
