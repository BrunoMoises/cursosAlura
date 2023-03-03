import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = ({ aoAlterar, label, valor, obrigatorio, placeholder }: CampoTextoProps) => {

    const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto