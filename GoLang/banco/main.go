package main

import (
	"banco/contas"
	"fmt"
)

func PagarBoleto(conta verificarConta, valor float64) {
	conta.Sacar(valor)
}

type verificarConta interface {
	Sacar(valor float64) string
}

func main() {
	contaDoDenis := contas.ContaPoupanca{}
	contaDoDenis.Depositar(100)
	PagarBoleto(&contaDoDenis, 60)

	fmt.Println(contaDoDenis.ObterSaldo())

	contaDaLuisa := contas.ContaCorrente{}
	contaDaLuisa.Depositar(200)
	PagarBoleto(&contaDaLuisa, 50)

	fmt.Println(contaDaLuisa.ObterSaldo())
}
