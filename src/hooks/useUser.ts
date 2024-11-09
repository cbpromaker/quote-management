import { User } from '../auth/userClass';
import { UserLoginInfo, Permission } from '../types';

export const useUser = () => {
  const user = User.getInstance();

  return {
    user: user.getCurrentUser(),
    hasPermission: (permission: Permission) => user.hasPermission(permission),
    login: (userInfo: UserLoginInfo) => user.setCurrentUser(userInfo),
    logout: () => user.logout(),
  };
};
