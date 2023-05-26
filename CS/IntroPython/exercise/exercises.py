#  exe 1: Crie uma função que receba dois números e retorne o maior deles

def biggerNum(num1, num2):
    if num1 > num2:
        return num1
    return num2


print('Bigger number:', biggerNum(6, 9))


# exe 2: Calcule a média aritmética dos valores contidos em uma lista.

def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([1, 2, 3]))


# exe 4: Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres


def return_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print('Biggest name:', return_biggest_name(['Stefan', 'Christoph',
                                            'Michael', 'Johannes']))
