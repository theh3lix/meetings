import { Agenda } from "../_models/agenda.model";
import { Komitet } from "../_models/komitet.model";
import { Meeting } from "../_models/meeting.model";

export class DBContext {
    Komitety: Komitet[];
    Agendy: Agenda[];
    Meetings: Meeting[];

    constructor() {
        this.Komitety = [
            {Id: 0, Name: 'Komitet 1', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 1, Name: 'Komitet 2', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 2, Name: 'Komitet 3', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 3, Name: 'Komitet 4', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}, 
            {Id: 4, Name: 'Komitet 5', Przewodniczacy: 'Imie Nazwisko', VPrzewodniczacy: 'Imie Nazwisko'}
        ]
        this.Agendy = this.generateAgendy();
        this.Meetings = this.generateMeetings();
        for(let i = 0; i < this.Komitety.length; i++) {
            this.Komitety[i].AgendyId = this.Agendy.filter(el => el.KomitetId == this.Komitety[i].Id).map(x=>x.Id);
        }
        for(let i=0;i<this.Agendy.length;i++) {
            this.Agendy[i].Punkty = this.Meetings.filter(el => el.AgendaId == this.Agendy[i].Id).map(x=>x.Id);
        }
    }

    generateAgendy() {
        let agendy: Agenda[] =
        [
            {
                Id: 0,
                Data: new Date(2023,1,2,8,0),
                Temat: 'Temat testowy 1',
                KomitetId: 0
            },
            {
                Id: 1,
                Data: new Date(2023,1,3,8,0),
                Temat: 'Temat testowy 2',
                KomitetId: 0
            },
            {
                Id: 2,
                Data: new Date(2023,1,4,8,0),
                Temat: 'Temat testowy 3',
                KomitetId: 1
            },
            {
                Id: 3,
                Data: new Date(2023,1,5,8,0),
                Temat: 'Temat testowy 4',
                KomitetId: 2
            },
            {
                Id: 4,
                Data: new Date(2023,1,6,8,0),
                Temat: 'Temat testowy 5',
                KomitetId: 2
            },
            {
                Id: 5,
                Data: new Date(2023,1,7,8,0),
                Temat: 'Temat testowy 6',
                KomitetId: 2
            },
            {
                Id: 6,
                Data: new Date(2023,1,8,8,0),
                Temat: 'Temat testowy 7',
                KomitetId: 4
            },
            {
                Id: 7,
                Data: new Date(2023,1,9,8,0),
                Temat: 'Temat testowy 8',
                KomitetId: 4
            }
        ];
        return agendy;
    }

    generateMeetings() {
        let meetings: Meeting[] = 
        [
            {
                Id: 0,
                CzasTrwania: 1.5,
                Temat: "Temat 1",
                NumerPunktu: 1,
                AgendaId: 0
            },
            {
                Id: 1,
                CzasTrwania: 1.5,
                Temat: "Temat 2",
                NumerPunktu: 1,
                AgendaId: 0
            },
            {
                Id: 2,
                CzasTrwania: 1.5,
                Temat: "Temat 3",
                NumerPunktu: 1,
                AgendaId: 1
            },
            {
                Id: 3,
                CzasTrwania: 1.5,
                Temat: "Temat 4",
                NumerPunktu: 1,
                AgendaId: 2
            },
            {
                Id: 4,
                CzasTrwania: 1.5,
                Temat: "Temat 5",
                NumerPunktu: 1,
                AgendaId: 2
            },
            {
                Id: 5,
                CzasTrwania: 1.5,
                Temat: "Temat 6",
                NumerPunktu: 1,
                AgendaId: 2
            },
            {
                Id: 6,
                CzasTrwania: 1.5,
                Temat: "Temat 7",
                NumerPunktu: 1,
                AgendaId: 3
            },
            {
                Id: 7,
                CzasTrwania: 1.5,
                Temat: "Temat 8",
                NumerPunktu: 1,
                AgendaId: 3
            },
            {
                Id: 8,
                CzasTrwania: 1.5,
                Temat: "Temat 9",
                NumerPunktu: 1,
                AgendaId: 4
            },
            {
                Id: 9,
                CzasTrwania: 1.5,
                Temat: "Temat 10",
                NumerPunktu: 1,
                AgendaId: 4
            },
            {
                Id: 10,
                CzasTrwania: 1.5,
                Temat: "Temat 11",
                NumerPunktu: 1,
                AgendaId: 4
            },
            {
                Id: 11,
                CzasTrwania: 1.5,
                Temat: "Temat 12",
                NumerPunktu: 1,
                AgendaId: 4
            },
            {
                Id: 12,
                CzasTrwania: 1.5,
                Temat: "Temat 13",
                NumerPunktu: 1,
                AgendaId: 5
            },
            {
                Id: 13,
                CzasTrwania: 1.5,
                Temat: "Temat 14",
                NumerPunktu: 1,
                AgendaId: 6
            },
            {
                Id: 14,
                CzasTrwania: 1.5,
                Temat: "Temat 15",
                NumerPunktu: 1,
                AgendaId: 6
            },
            {
                Id: 15,
                CzasTrwania: 1.5,
                Temat: "Temat 16",
                NumerPunktu: 1,
                AgendaId: 7
            },
            {
                Id: 16,
                CzasTrwania: 1.5,
                Temat: "Temat 17",
                NumerPunktu: 1,
                AgendaId: 7
            },
            {
                Id: 17,
                CzasTrwania: 1.5,
                Temat: "Temat 18",
                NumerPunktu: 1,
                AgendaId: 7
            },
            {
                Id: 18,
                CzasTrwania: 1.5,
                Temat: "Temat 19",
                NumerPunktu: 1,
                AgendaId: 7
            },
            {
                Id: 19,
                CzasTrwania: 1.5,
                Temat: "Temat 20",
                NumerPunktu: 1,
                AgendaId: 7
            },
            {
                Id: 20,
                CzasTrwania: 1.5,
                Temat: "Temat spotkania 21",
                NumerPunktu: 1,
                AgendaId: 7
            }
        ];
        return meetings;
    }
}