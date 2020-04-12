const Users = [
    { Name: 'Admin', Password_Admin: 'admin', Username_Admin:'admin'  },
    { Name: 'Venu', Password_Admin: 'admin', Username_Admin:'admin2' },
    { Name: 'Tadis', Password: '1998', Username:'tadis' },
    { Name: 'Venus', Password: 'venu', Username: 'naredlav1'},
    { Name: 'Naredla', Password: 'venus', Username: 'venus' },
];


export let CurrentUser = null;

export function Login(username, password) {

    const user = Users.find(x => x.Username == username);
    if(!user) throw Error('Username you entered is incorrect');
    if(user.Password != password) throw Error('Incorrect Password');
    
    return CurrentUser = user;

}

export let CurrentAdmin = null;

export function Admin_Login(username, password) {

    const admin = Users.find(y => y.Username_Admin == username);
    if(!admin) throw Error('Username you entered is incorrect');
    if(admin.Password_Admin != password) throw Error('Wrong Password(Hint:Ask admin)');

    return CurrentAdmin = admin;

}