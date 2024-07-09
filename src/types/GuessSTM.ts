export type LastTry = {
    id: string,
    brandName: string;
    selectedOption: string;
    correctOption: string;
    answer_status: boolean;
    userId: number;
}

export type CreateLastTry = Omit<LastTry, "id">;
