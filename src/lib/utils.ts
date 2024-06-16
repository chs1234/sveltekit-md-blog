type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formateDate(date: string, dateStyle: DateStyle = 'medium', locales = 'ko') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(new Date(date))
}