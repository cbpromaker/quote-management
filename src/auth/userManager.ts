import { UserLoginInfo, UserInfo, Permission, UserRole } from '../types';

export class UserManager {
  private static instance: UserManager;
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

  public releaseCurrentUser(): void {
    this.currentUser = null;
  }

  public static getInstance(): UserManager {
    if (!UserManager.instance) {
      UserManager.instance = new UserManager();
    }
    return UserManager.instance;
  }

  public getCurrentUser(): UserInfo | null {
    return this.currentUser;
  }

  public hasPermission(permission: Permission): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.permissions[permission];
  }
}

export default UserManager.getInstance();
