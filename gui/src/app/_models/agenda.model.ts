export interface Agenda {
    Id: number,
    Data: Date,
    Temat: string,
    KomitetId: number,
    Punkty?: number[]
}