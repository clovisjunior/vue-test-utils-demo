import { mutations } from './'

describe('mutations', () => {

    it('completes a incomplete todo', () => {
        let state = {
            todos: {
                '0': { complete: false }
            }
        };

        mutations.TOGGLE_COMPLETE(state, { id: 0 });
        expect(state.todos[0].complete).toBe(true);
    });

    it('creates a todo by calling CREATE_TODO', () => {
        let state = {
            todos: {

            },
            ids: []
        };

        mutations.CREATE_TODO(state, { text: 'New todo' });
        expect(state.todos[1]).toHaveProperty('text');
        expect(state.todos[1].text).toBe('New todo');
        expect(state.ids.length).toBe(1);
    });

});