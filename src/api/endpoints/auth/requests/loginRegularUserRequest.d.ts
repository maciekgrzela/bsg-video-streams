import { loginDeviceRequest } from './loginDeviceRequest';

export interface loginRegularUserRequest {
  username: string;
  password: string;
  device: loginDeviceRequest;
}
