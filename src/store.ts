import { createStore } from "easy-peasy";

interface MyStore {
  passwordResetRequired: boolean;
}

const store = createStore<MyStore>({
  passwordResetRequired: false,
});

export default store;
