def fizzbuzz(number):
    if number % 15 == 0:
        return 'FizzBuzz'
    if number % 3 == 0:
        return 'Fizz'
    if number % 5 == 0:
        return 'Buzz'
    else:
        return str(number)
    
if __name__ == "__main__":
    # number = int (input('Enter a number: '))
    for number in range(100):
        result = fizzbuzz(number)
        print(result)
    
    