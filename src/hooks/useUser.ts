import userManager from '../auth/userManager';
import { Permission } from '../types';

export const useCurrentUser = () => {
  return {
    user: userManager.getCurrentUser(),
    hasPermission: (permission: Permission) =>
      userManager.hasPermission(permission),
  };
};
