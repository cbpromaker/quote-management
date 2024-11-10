import { useContext, Context } from 'react';

/**
 * 안전하게 컨텍스트를 사용하도록 하는 커스텀 훅.
 * 컨텍스트 타입이 undefined가 아닌 것을 보장한다.
 * @param context - 사용할 컨텍스트 객체
 * @return 안전하게 제공된 컨텍스트 값
 */
export default function useSafeContext<T>(context: Context<T | undefined>): T {
  const value = useContext(context);
  if (value === undefined) {
    throw new Error('Context is not provided');
  }
  return value;
}

export { PageStateContext, PageStateProvider } from './PageState';
