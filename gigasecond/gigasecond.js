const MSPERGIGASECOND=1000000000000;

export default start => ({
    date: () => new Date(start.getTime()+MSPERGIGASECOND)
})
