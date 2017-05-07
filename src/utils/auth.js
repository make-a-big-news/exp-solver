import cookies from 'js-cookie';
import { domain } from '@/config';
import store from '@/store';
import { LOG_IN, LOG_OUT } from '@/store/mutation-types';

export default {
    login(){
        cookies.set('sessionId', 'uid12345', { expires: 3, path: '/', domain: domain });
        store.commit(LOG_IN);
    },
    logout(){
        cookies.remove('sessionId', { path: '/', domain: domain });
        store.commit(LOG_OUT);
    },
    checkIfLoggedIn(){
        return typeof cookies.get('sessionId') !== 'undefined';
    }
}
