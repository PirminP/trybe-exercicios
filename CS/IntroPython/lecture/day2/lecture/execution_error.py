# while True:
#    try:
#        x = int(input("Por favor digite um número inteiro: "))
#        break
#    except ValueError:
#        print('Oops! Not a int number. Try again...')

try:
    with open("arquivo.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("Arquivo inexistente")
else:
    print("Arquivo manipulado e fechado com sucesso")
finally:
    print("Fim da tentativa de ler o arquivo")


# exe3 of lecture

rec_students = []
with open('student_grades.txt') as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            rec_students.append(student_grade[0] + "\n")


with open('rec_students.txt', mode='w') as rec_students_file:
    rec_students_file.writelines(rec_students)

with open('rec_students.txt', 'r') as rec_students_file:
    content = rec_students_file.read()
    print(content)
