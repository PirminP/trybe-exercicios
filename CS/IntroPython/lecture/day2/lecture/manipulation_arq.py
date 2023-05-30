# file = open('man_arquive.text', mode ='w')


# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto
# à variável file
with open("arquivo.txt", "w") as file:
    # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
    # através do atributo booleano 'closed' (file.closed = False)
    # print(file.closed)
    file.write('Maria 35\n')
    file.write('Luca 32\n')

    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)
#  print(file.closed)
