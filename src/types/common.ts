export type UserName = '곽준구' | '오한빈' | '이재희'; // 프로토타입 제시 후 필요시 완성
export type UserRole = 'manager' | 'member' | 'bookkeeper';
export type Permission = 'create' | 'read' | 'update' | 'delete' | 'record';

export interface UserLoginInfo {
  id: UserName;
  role: UserRole;
}

export interface User extends UserLoginInfo {
  permissions: Record<Permission, boolean>;
}

// export interface Estimate {}
//
// export interface Specification extends Estimate {}
