export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface DrawerItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItems[];
}

export interface IResponseObject {
  data: any;
  meta?: IMeta;
}

export interface IMessage {
  path: string | number;
  message: string;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: IMessage[];
}
export type UserRole = keyof typeof USER_ROLE;
