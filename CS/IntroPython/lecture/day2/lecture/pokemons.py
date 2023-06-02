import json

with open('pokemons.json') as file:
    pokemons = json.load(file)['results']

#  print(pokemons[0])

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open('grass_type_pokemons', 'w') as file:
    json_write = json.dumps(grass_type_pokemons)  # convert to json
    file.write(json_write)
