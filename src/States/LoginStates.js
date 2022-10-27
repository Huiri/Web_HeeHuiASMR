import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();
export const LoginState = atom({
    key : 'LoginState',
    default : false,
    effects_UNSTABLE : [persistAtom],
});
export const UserNameState = atom({
    key : 'UserNameState',
    default : '',
    effects_UNSTABLE : [persistAtom],
});
export const UserEmailState = atom({
    key : 'UserEmailState',
    default : '',
    effects_UNSTABLE : [persistAtom],
});