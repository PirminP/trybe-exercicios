def countdown(n):
    if n == 0:
        print('END')
    else:
        print(n)
        countdown(n - 1)  # chamada recursiva


countdown(5)


def factorial(x):
    if x <= 1:  # caso base
        return 1
    else:
        return x * factorial(x - 1)  # caso recursivo


factorial(5)
