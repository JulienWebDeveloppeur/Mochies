import {
  NavigationItemType,
  NavigationItem,
} from "types/navigation/navigation.d";

export const tabs: NavigationItemType[] = [
  NavigationItem.HOME,
  NavigationItem.OVERVIEW,
];

export const defaultState = {
  navigationItemSelected: NavigationItem.HOME.key as string,
};
