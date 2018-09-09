export class User {
    username: string;
    password: string;
    gender: string;
    dateofBirth: Date;
    image?: string
}

export const USERS: User[] = [
    {username: 'ozge', password: '1', gender: 'female', dateofBirth: new Date('March 24, 1993')},
    {username: 'gamze', password: '2', gender: 'female', dateofBirth: new Date('November 24, 1987')},
    {username: 'berkay', password: '3', gender: 'male', dateofBirth: new Date('February 13, 2012')},
]