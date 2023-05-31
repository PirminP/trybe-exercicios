def fibonacci(num):
    if (num <= 1):
        return num
    else:
        print(num)
        return fibonacci(num - 2) + fibonacci(num - 1)


fibonacci(5)
