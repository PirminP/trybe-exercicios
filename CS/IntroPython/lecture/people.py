import area


PEOPLE_PER_SQUARE_METER = 2
FIELD_LENGTH = 60  # in m
FIELD_WIDTH = 45  # in m
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
print('Around', people_at_concert, 'people at concert.')
