import { SimpleBikeEntity } from "types";

export const findNewOrderNumber = (bikes: number): string => {

    const date: Date = new Date();

    let month: string = (date.getMonth() + 1).toString();

    if(Number(month) < 10) {
        month = '0' + month.toString();
    }
    const year: string = date.getFullYear().toString().slice(-2);

    const day: string = date.getDate().toString();

    console.log(`${day}${month}${year}MM${bikes + 1}`);

    return `${day}${month}${year}MM${bikes + 1}`;


    // const numbersWithActuallYearOfLastOrders: string[] = orderNumbers.filter(order => order.slice(6,8) === year);
    //
    // if(!numbersWithActuallYearOfLastOrders) {
    //     return `${day}${month}${year}-1`;
    // }
    //
    // const numbersWithActuallMonthAndyearOfLastOrders: string[] = numbersWithActuallYearOfLastOrders.filter(order => order.slice(2,4) === month);
    //
    // if(!numbersWithActuallMonthAndyearOfLastOrders) {
    //     return `${day}${month}${year}-1`;
    // }
    //
    // const lastOrderNumber: string = numbersWithActuallMonthAndyearOfLastOrders.sort((a, b) => Number(b) - Number(a))[0];
    //
    // let sliceIndex: number = lastOrderNumber.indexOf('-');
    //
    // const lastNumber: string = lastOrderNumber.slice(sliceIndex + 1, lastOrderNumber.length);
    //
    // const nextNumber = Number(lastNumber) + 1;
    //
    // console.log(`${day}${month}${year}-${nextNumber}`);
    //
    // return `${day}${month}${year}-${nextNumber}`;
};