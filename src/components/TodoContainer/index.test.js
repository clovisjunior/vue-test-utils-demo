import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import TodoContainer from './'

Vue.use(Vuex);

describe('TodoContainer', () => {
    let store;
    let mutations;

    beforeEach( () => {

        mutations = {
            TOOGLE_COMPLETE: jest.fn()
        };

        store = new Vuex.Store({
            state: {
                todos: {
                    '0': {
                        text: 'Do some work',
                        completed: false
                    },
                    '1': {
                        text: 'Take a rest',
                        completed: false
                    }
                },
                ids: [0, 1]
            },
            mutations
        });
    });

    it('renders two todo items', () => {
        const wrapper = shallow(TodoContainer, {
            store, 
            stubs: {
                TodoItem: '<TodoItem></TodoItem>'
            }
        });

        const todos = wrapper.findAll('TodoItem');
        expect(todos.length).toBe(2);
    });

    it('commits a TOOGLE_COMPLETE mutation when clicked', () => {
        const wrapper = shallow(TodoContainer, {
            store,
            stubs: {
                TodoItem: '<TodoItem></TodoItem>'
            }
        });

        const todo = wrapper.find('TodoItem');
        todo.trigger('click');

        expect(mutations.TOOGLE_COMPLETE.mock.calls[0][1]).toHaveProperty('id');
        expect(mutations.TOOGLE_COMPLETE.mock.calls.length).toBe(1);
    });
});