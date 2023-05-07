import { Agenda } from "./agenda.model";

export interface Komitet {
    Id: number,
    Name: string,
    Przewodniczacy: string,
    VPrzewodniczacy: string,
    AgendyId?: number[]
}