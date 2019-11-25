import config from '../app-config';

export const handleOnEnter = (e: any, callback: any) => {
  if (e.keyCode === config.ENTER_KEY) {
    callback();
  }
};
