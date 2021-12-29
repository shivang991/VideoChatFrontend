import { ComponentOptions } from "vue";

export interface ModalState {
  shouldShow?: boolean;
  isClosable?: boolean;
  onSuccess?: () => void;
  component?: ComponentOptions;
}

export enum ModalMutationTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
  SHOW_AUTH_MODAL = "SHOW_AUTH_MODAL",
  SHOW_MEDIA_MODAL = "SHOW_MEDIA_MODAL",
  SHOW_LEAVE_ROOM_CONFIRMATION = "SHOW_LEAVE_ROOM_CONFIRMATION",
  SHOW_REMOVE_MEMBER_CONFIRMATION = "SHOW_REMOVE_MEMBER_CONFIRMATION",
  SHOW_JOIN_ERROR_MODAL = "SHOW_JOIN_ERROR_MODAL",
  SHOW_JOINING_MODAL = "SHOW_JOINING_MODAL",
}