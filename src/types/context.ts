import { PageState } from '.';

export interface PageStateContext {
  pageState: PageState;
  setPageState: (pageState: PageState) => void;
}
