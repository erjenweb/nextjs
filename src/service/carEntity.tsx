type Car = {
    _id: string;
    hexon_nr: string;
    license_plate: string;
    merk: string;
    model: string;
    title_nl: string;
    topSpeed: string;
    odometerReading: {
        value:string,
        unit:string
    };
    buildYear: string;
    short_desc: string;
    remarks_nl:string;
    pricing: {
        country: string;
        amount: string;
        currency: string;
    };
    images: string[];
};

export default Car;