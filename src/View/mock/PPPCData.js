import { langSearchPPPC } from '../../assets/languages/langSearchPPPC';
import { images } from '../../assets/images';

export const Arr = [
    {
        id: 1,
        title: `${langSearchPPPC.th.RequiredInformation}`,
        firstname: `${langSearchPPPC.th.username}`,
        image: `${images.required}`,
        enable: true,
        testUsername: 'firstname',
        testPassword: 'password',
        one: 'one',
    },
    {
        id: 2,
        title: `${langSearchPPPC.th.RequiredInformation}`,
        firstname: `${langSearchPPPC.th.username}`,
        image: `${images.chat}`,
        enable: false,
        testUsername: 'firstname2',
        testPassword: 'password2'
    }
]

export const Att = [
        {
        id: 3,
        title: `${langSearchPPPC.th.RequiredInformation}`,
        firstname: `${langSearchPPPC.th.username}`,
        image: `${images.personal}`,
        enable: false,
        testUsername: 'firstname3',
        testPassword: 'password3'
    }
]

