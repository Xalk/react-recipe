export interface IUser {
    token: string;
    info: {
        id: number,
        name: string,
        email: string,
        email_verified_at: null | string,
        created_at: string,
        updated_at: string
    }
}


export interface UserState {
    data: IUser | null;
}

