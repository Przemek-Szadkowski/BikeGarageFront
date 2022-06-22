export const findNewOrderNumber = (bikes: number): string => {

    const date: Date = new Date();

    let month: string = (date.getMonth() + 1).toString();

    if(Number(month) < 10) {
        month = '0' + month.toString();
    }
    const year: string = date.getFullYear().toString().slice(-2);

    const day: string = date.getDate().toString();

    return `${day}${month}${year}MM${bikes + 1}`;
};