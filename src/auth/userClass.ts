import { UserLoginInfo, UserInfo, Permission, UserRole } from '../types';

export class User {
  private static instance: User;
  private currentUser: UserInfo | null = null;

  private readonly rolePermissions: Record<UserRole, Permission[]> = {
    manager: ['read', 'update', 'create', 'delete'],
    member: ['read', 'update'],
    bookkeeper: ['read', 'record'],
  };

  private constructor() {}

  private initializeUserPermissions(loggedInUser: UserLoginInfo): UserInfo {
    const rolePermissions = this.rolePermissions[loggedInUser.role];
    const permissions = {} as Record<Permission, boolean>;

    (['create', 'read', 'update', 'delete', 'record'] as Permission[]).forEach(
      (permission) => {
        permissions[permission] = rolePermissions.includes(permission);
      },
    );

    return {
      ...loggedInUser,
      permissions,
    };
  }

  public setCurrentUser(loggedInUser: UserLoginInfo): void {
    this.currentUser = this.initializeUserPermissions(loggedInUser);
  }

  public logout(): void {
    this.currentUser = null;
  }

  public static getInstance(): User {
    if (!User.instance) {
      User.instance = new User();
    }
    return User.instance;
  }

  public getCurrentUser(): UserInfo | null {
    return this.currentUser;
  }

  public hasPermission(permission: Permission): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.permissions[permission];
  }
}
