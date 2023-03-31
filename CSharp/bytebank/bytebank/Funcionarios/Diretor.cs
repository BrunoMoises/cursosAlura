using bytebank.SistemaInterno;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytebank.Funcionarios
{
    public class Diretor: FuncionarioAutenticavel
    {
        public override double GetBonificacao()
        {
            return Salario * 0.25;
        }

        public Diretor(string cpf) : base(cpf, 5000)
        {
            
        }

        public override void AumentarSalario()
        {
            Salario *= 1.15;
        }
    }
}
