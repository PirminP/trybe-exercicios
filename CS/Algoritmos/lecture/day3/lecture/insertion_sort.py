def insertion_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for index in range(1, n):  # Começaremos a ordenar pelo segundo elemento
        key = numbers[index]  # Pegamos 2. elemento e o definimos como chave

        new_position = index - 1  # Tomamos posição anterior para iniciar com.
        # Enquanto chave menor, remaneja elemento para frente
        while new_position >= 0 and numbers[new_position] > key:
            numbers[new_position + 1] = numbers[new_position]  # Remaneja eleme
            new_position = new_position - 1

        numbers[new_position + 1] = key  # Insere a chave na posição correta

    return numbers,


numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))
