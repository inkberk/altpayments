import { History } from 'history';
import { TodoModel } from 'app/models';
import { TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';
import {
  STORE_ROUTER,
  STORE_TENANT,
  STORE_TODO,
  STORE_USER
} from 'app/constants';
import UserStore from 'app/stores/UserStore';
import TenantStore from 'app/stores/TenantStore';

export function createStores(history: History, defaultTodos?: TodoModel[]) {
  const todoStore = new TodoStore(defaultTodos);
  const routerStore = new RouterStore(history);
  const userStore = new UserStore();
  const tenantStore = new TenantStore();

  return {
    [STORE_TODO]: todoStore,
    [STORE_ROUTER]: routerStore,
    [STORE_USER]: userStore,
    [STORE_TENANT]: tenantStore
  };
}
