export const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
export const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const dateSatuan = (number) => {
    if(number < 10) {
        return `0${number}`
    }
    return `${number}`
}

export const dateToString = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export const dateToStringWithDay = (date) => {
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `
}

export const dateToStringWithTime = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${dateSatuan(date.getHours())}:${dateSatuan(date.getMinutes())} WIB`
}

export const dateToStringNumberMonth = (date) => {
    return `${date.getFullYear()}-${dateSatuan(date.getMonth()+1)}-${dateSatuan(date.getDate())}`
}
