export type UserName = '곽준구' | '오한빈' | '이재희'; // 프로토타입 제시 후 필요시 완성
export type UserRole = 'manager' | 'member' | 'bookkeeper';
export type Permission = 'create' | 'read' | 'update' | 'delete' | 'record';

export interface UserLoginInfo {
  id: UserName;
  role: UserRole;
}

export interface UserInfo extends UserLoginInfo {
  permissions: Record<Permission, boolean>;
}

export interface Estimate {
  id: number;
  createAt: Date;
  client: string;
  creator: UserName;
  lastModified: Date;
  lastHandler: UserName;
  amount: number;
}

export interface Specification extends Estimate {
  paymentMethod: 'card' | 'taxInvoice';
  taxInvoice?: boolean;
  paymentConfirmed: boolean;
  // paymentConfirmed를 확인하는 책임은 lastHandler에게 부여된다.
}

export type PageState =
  | 'login'
  | 'estimates'
  | 'estimate_update'
  | 'specification';
