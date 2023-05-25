PI = 3.14


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * radius * radius


if __name__ == '__main__':
    print('area of square:', square(6))
    print('area of rectangle:', rectangle(3, 8))
    print('area of circle:', circle(5))
