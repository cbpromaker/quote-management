// authAPI
import { UserLoginInfo } from '.';

export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  success: boolean;
  userLoginInfo?: UserLoginInfo;
}
