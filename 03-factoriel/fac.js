// write your func here
function factorial(num) {
    if (num < 0) 
            return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
    }
    factorial(10);
    console.log(factorial(10))