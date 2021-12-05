import create from 'zustand';
import { User } from '../../models';
import { produce } from 'immer';

interface State extends User {
  updateCompany(company: string): void;
  updateName(name: string): void;
  updateUser(userPartial: Omit<User, 'company'>): void;
}

type Callback = (state: State) => void;

export const useUser = create<State>(set => {
  const setState = (fn: Callback) => set(produce(fn));

  return {
    name: null,
    age: null,
    company: null,
    updateCompany: (company) => setState(state => {
      state.company = company
    }),
    updateName: (name) => setState(state => {
      state.name = name
    }),
    updateUser: (userPartial) => setState(state => ({
      ...state,
      ...userPartial,
    })),
  }
});