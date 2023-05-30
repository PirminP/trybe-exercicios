# read
#  with open('arquivo.text', 'r') as file:
#    content = file.read()
#    print(content)


# escrita
with open("file.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("file.txt", "r") as file:
    for line in file:
        print(line)  # não esqueça que a quebra de linha também é
        # um caractere da linha
