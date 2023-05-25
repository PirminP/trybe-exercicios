#  exe 1: Crie uma função que receba dois números e retorne o maior deles

def biggerNum(num1, num2):
    if num1 > num2:
        return num1
    return num2


print('Bigger number: ', biggerNum(6, 9))


# exe 2: Calcule a média aritmética dos valores contidos em uma lista.

def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([1, 2, 3]))
