export default function objectSample() {
    
    const shuty: {
        age: number,
        lastName: string,
        readonly firstName: string,
        gender?: string
    } = {
        age: 23,
        lastName: 'komuro',
        firstName: 'shuto',
    }

    console.log('About shuty: ', shuty);

    shuty.lastName = 'ueha';
    shuty.gender = 'man';
    console.log('About shuty: ', shuty);

    const ca: {
        [ctName: string]: string
    } = {
        ja: 'tokyo',
        korea: 'seoul'
    }

    ca.china = 'beijing';
    ca.canada = 'ottawa'
    console.log('About CountryName: ', ca);
}