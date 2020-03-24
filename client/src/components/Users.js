const Users = [
    { Name: 'VENU', Password: '2020', Email: 'naredlav1@newpaltz.edu' },
    { Name: 'sankar', Password: '2020', Email: 'naredlav1@hawkmail.newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}