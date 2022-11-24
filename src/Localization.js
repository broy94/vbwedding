import LocalizedStrings from "react-localization";

export let localizedStrings = new LocalizedStrings({
    en: {
        menu: {
            schedule: "Schedule",
            seating: "Seating",
            accommodation: "Accommodation",
            rsvp: "RSVP"
        },
        countdown: {
            day: {
                singular: "day",
                plural: "days"
            },
            hour: {
                singular: "hour",
                plural: "hours"
            },
            minute: {
                singular: "minute",
                plural: "minutes"
            },
            second: {
                singular: "second",
                plural: "seconds"
            },
        },
        main: {
            title: "Viki & Bubi Wedding",
            date: "June 3, 2021",
            venue: {
                title: "Új Tanyacsárda, Lajosmizse",
                location: "150 Közös, Felsőlajos, 6055"
            },
            rsvpButton: "rsvp",
        },
        accommodation: {
            information: {
                text: "All the rooms of Tanyacsárda's (the venue's) accommodation have been reserved for the young couple and their close relatives (altogether 31 people). However, if needed, further reservations can be made at the accommodations listed below. We recommend to book your rooms as soon as possible, while there are still spaces available. Further information can be found ",
                linkText: "at the venue's website"
            }
        }
    },
    hu: {
        menu: {
            schedule: "Menetrend",
            seating: "Ülésrend",
            accommodation: "Szállás",
            rsvp: "Visszajelzés"
        },
        countdown: {
            day: {
                singular: "nap",
                plural: "nap"
            },
            hour: {
                singular: "óra",
                plural: "óra"
            },
            minute: {
                singular: "perc",
                plural: "perc"
            },
            second: {
                singular: "másodperc",
                plural: "másodperc"
            },
        },
        main: {
            title: "Viki & Bubi Esküvő",
            date: "2023. június 3.",
            venue: {
                title: "Lajosmizse, Új Tanyacsárda",
                location: "6055 Felsőlajos, Közös 150."
            },
            rsvpButton: "visszajelzés",
        },
        accommodation: {
            information: {
                text: "A Tanyacsárda saját szálláshelyének összes férőhelye le van foglalva az ifjú pár és közeli hozzátartozói részére (össz. 31 fő). Azonban igény esetén az alábbi környékbeli helyeken lehet további szállásokat foglalni. Javasoljuk, hogy minél előbb foglaljanak, mert hamar betelhetnek a helyek. További információ a ",
                linkText: "Tanyacsárda honlapján"
            }
        }
    }
});
