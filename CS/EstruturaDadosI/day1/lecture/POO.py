#  Encapsulamento

class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()


class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


# Abstracao

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False


# Getters/Setters

class Liquidificador:
    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor
        self.set_cor(cor)

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Azul", "110", "127", "200")

# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'

print(f"A cor atual é {liquidificador.get_cor()}")
# A cor atual é AZUL
liquidificador.set_cor("Preto")
print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")
# Após pintarmos, a nova cor é PRETO


# Composicao

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} real em sua conta."


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
