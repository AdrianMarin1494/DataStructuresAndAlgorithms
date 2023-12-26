// https://www.codewars.com/kata/5875b200d520904a04000003

enough = (cap, on, wait) => cap >= on + wait ? 0 : (on + wait) - cap;