import config from '../app-config';

export const handleOnEnter = (e: any, callback: any) => {
  if (e.keyCode === config.ENTER_KEY) {
    callback();
  }
};

export const handleOnTab = (e: any, callback: any) => {
  if (e.keyCode === config.TAB_KEY) {
    callback();
  }
};

export const handleOnEnterOrTab = (e: any, callback: any) => {
  if (e.keyCode === config.ENTER_KEY || e.keyCode === config.TAB_KEY) {
    callback();
  }
};
