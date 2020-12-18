import {gitUserType} from './utils';

// Getting data from github user api
export const gitUserApiCall = async ():Promise<gitUserType[]> => {
  let url = await fetch('https://api.github.com/users?since=135');
  let res = await url.json();
  return res as gitUserType[];
};

export const wrapPromise = (promise: Promise<gitUserType[]>) => {
  let status: string = 'pending';
  let result:gitUserType[];
  let suspender:Promise<void> = promise.then(
    (r:gitUserType[]):void => {
      status = 'success';
      result = r;
    },
    (e):void => {
      status = 'error';
      result = e;
    },
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }
      return result;
    },
  };
};

export const createResource = ():any => {
  let gitUserPromise = gitUserApiCall();
  return {
    user: wrapPromise(gitUserPromise),
  };
};
