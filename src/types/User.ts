export type User = {
    id: number,
    login: string,
    fio: string,
    mail: string,    
};

export type CreateUser = {    
    login: string,
    password: string,
    fio: string,
    mail: string,    
};

export type AuthUser = {
    login: string,
    password: string,
}