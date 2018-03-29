import { shallow } from 'vue-test-utils'
import NewTodoItem from './'

describe('NewTodoItem', () => {

    it('calls createTodo when enter is pressed', () => {
        const createTodo = jest.fn();

        const wrapper = shallow(NewTodoItem);

        wrapper.setMethods({ createTodo });
        const input = wrapper.find('input');
        input.trigger('keydown.enter');

        expect(createTodo.mock.calls.length).toBe(1);

    });
    
});