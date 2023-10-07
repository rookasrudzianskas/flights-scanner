import dayjs from 'dayjs';

const url = 'http://localhost:3000';


const SearchFlights = async ({ from, to, departDate, returnDate }: { from: string, to: string, departDate: number, returnDate: number}) => {
  try {
    // @ts-ignore
    const response = await fetch(
      `${url}/search?from=${from}&to=${to}&departDate=${dayjs(
        departDate
      ).format('YYMMDD')}&returnDate=${dayjs(returnDate).format('YYMMDD')}`
    );

    if (response.status !== 200) {
      return { error: 'Failed to search', data: [] };
    }

    return {
      // @ts-ignore
      data: await response.json(),
    };
  } catch (e) {
    return {
      error: 'Network error',
      data: [],
    };
  }
}

export default SearchFlights;
