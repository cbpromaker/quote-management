import { UserLoginInfo, User, Permission, UserRole } from '../types';

export class PermissionManager {
  private static instance: PermissionManager;
  private currentUser: User | null = null;

  private readonly rolePermissions: Record<UserRole, Permission[]> = {
    manager: ['read', 'update', 'create', 'delete'],
    member: ['read', 'update'],
    bookkeeper: ['read', 'record'],
  };

  private constructor() {}

  private initializeUserPermissions(loggedInUser: UserLoginInfo): User {
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

  public static getInstance(): PermissionManager {
    if (!PermissionManager.instance) {
      PermissionManager.instance = new PermissionManager();
    }
    return PermissionManager.instance;
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }

  public hasPermission(permission: Permission): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.permissions[permission];
  }
}
