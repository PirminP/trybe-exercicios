import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


user_input = input("Digite uma mensagem: ")
print('O valor recebido foi:', user_input)

#  saida

print("O resultado é", 42)
print("Os resultados são", 6, 23, 42)

print("Maria", "João", "Miguel", "Ana")
print("Maria", "João", "Miguel", "Ana", sep=", ")

print("Em duas ")
print("linhas.")

print("Na mesma", end=" ")
print("linha.")


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


# Desempacotamento de Valores

a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3)
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
