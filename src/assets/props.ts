interface FieldProps {
    title: string;
    description: string;
    defaultValue: number;
}

interface RangeProps {
    minimum: number;
    maximum: number;
    value?: number | unknown;
    defaultValue: number;
    units: string | null;
    description: string;
    title: string | null;
    step?: number;
    processing?: Function;

}

interface Properties {
    price: FieldProps;
    firstPay: FieldProps;
    rate: RangeProps;
    term: RangeProps;

}
const Properties: Properties = {
    price: {
        title: "Стоимость",
        description:"Полная стоимость приобретаемого помещения",
        defaultValue: 5000000, 
    },
    firstPay: {
        title:"Первый взнос",
        description:"Размер первого взноса по кредиту",
        defaultValue:3500000,
    },
    rate: {
        minimum:0.1,
        maximum:30,
        defaultValue:15,
        units:"%",
        description:"Укажите ставку ипотеки или введите вручную",
        title:null,
        step: 0.1,
    },
    term: {
        minimum:1,
        maximum:30,
        defaultValue:15,
        units: "Год",
        description:"Срок ипотеки",
        title: null,
    }
};


export default Properties