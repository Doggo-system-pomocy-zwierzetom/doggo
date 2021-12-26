import { createContext, useState, useEffect } from 'react';
// import getAuthInfo from '../apis/getAuthInfo';
export const LoginInfoContext = createContext<any>(undefined);
LoginInfoContext.displayName = 'LoginInfoContext';

const LoginInfoContextProvider = (props: any) => {
  const profile: any = localStorage.getItem('profile') || null;
  //   const token: any = profile ? JSON.parse(profile).token : 'dupa';
  //   const profile: any = localStorage.getItem('profile');
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(profile));
  }, []);

  return <LoginInfoContext.Provider value={[user, setUser]}>{props.children}</LoginInfoContext.Provider>;
};

export default LoginInfoContextProvider;
