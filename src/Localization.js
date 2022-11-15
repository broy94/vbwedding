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
        }
    }
});
