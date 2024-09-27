export const getDateBackOneMount = () => {
    const currentDate = new Date();
    const oneMonthBack = new Date(currentDate);

    oneMonthBack.setMonth(currentDate.getMonth() - 1);

    oneMonthBack.setMonth(currentDate.getMonth() - 1);

    oneMonthBack.setDate(oneMonthBack.getDate() - 1);

    if (oneMonthBack.getDate() !== currentDate.getDate() - 1) {
        oneMonthBack.setDate(0);
    }

    const formatCurrentDate = currentDate.toISOString().split('T')[0];
    const formatedBackOneMountDate = oneMonthBack.toISOString().split('T')[0];

    return { startDate: formatCurrentDate, endDate: formatedBackOneMountDate }
}