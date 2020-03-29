const Users = [
    { Name: 'Venu', Password: '2020', Email: 'venu@sunynp.edu' },
    { Name: 'Naredla', Password: '2020', Email: 'naredla@sunynp.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}