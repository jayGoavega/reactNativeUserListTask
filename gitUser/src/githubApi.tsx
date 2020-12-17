import {gitUserType} from './utils';

interface arrayType {
  userDetails: gitUserType[];
}

// Getting data from github user api
export const gitUserApiCall = async () => {
  let url = await fetch('https://api.github.com/users?since=135');
  let res = await url.json();
  return res;
};

export const wrapPromise = (promise: Promise<any>) => {
  let status: string = 'pending';
  let result:arrayType;
  let suspender = promise.then(
    (r:arrayType):void => {
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
