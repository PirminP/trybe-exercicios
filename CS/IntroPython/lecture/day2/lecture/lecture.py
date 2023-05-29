#  exe1: Faça um programa que solicite o nome de uma pessoa usuária
#  e imprima-o na vertical

NAME = input('Insert your name: ')

for letter_name in NAME:
    print(letter_name)


# exe2

nums = input("Insira valores aqui, separados por espaço: ")

nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
