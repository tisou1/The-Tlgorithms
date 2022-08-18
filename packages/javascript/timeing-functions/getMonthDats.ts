


const getMonthDays = (monthNumber: number, year: number = new Date().getFullYear()) => {
  const the31DaysMonths = [1, 3, 5, 7, 8, 10, 12]
  const the30DaysMonths = [4, 6, 9, 11]

  if(!the31DaysMonths.includes(monthNumber) && !the30DaysMonths.includes(monthNumber) && monthNumber !== 2)
    throw new TypeError('无效的月份')
    
  if(the31DaysMonths.includes(monthNumber))
    return 31
  
  if(the30DaysMonths.includes(monthNumber))
    return 30

  if(year % 4 === 0) {
    if((year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) 
      return 29
  }

  return 28
}

export  { getMonthDays }