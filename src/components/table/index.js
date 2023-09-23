import TableBody from "@/components/table/body";
import TableHead from "@/components/table/head";

const Table = () => {
    const heads = ["Operacao", "Sinal", "Exemplo", "Resultado"]
    const rows = [{
        operacao: "Potenciação",
        sinal: "pow()",
        exemplo: "pow(2,3)",
        resultado: "2³ -> 8"
    },
        {
            operacao: "Potenciação",
            sinal: "pow()",
            exemplo: "pow(2,3)",
            resultado: "2³ -> 8"
        },
        {
            operacao: "Potenciação",
            sinal: "pow()",
            exemplo: "pow(2,3)",
            resultado: "2³ -> 8"
        },
        {
            operacao: "Potenciação",
            sinal: "pow()",
            exemplo: "pow(2,3)",
            resultado: "2³ -> 8"
        }
    ]
return <table className="min-w-max w-full table-auto">
    <TableHead heads={heads}/>
    <TableBody rows={rows} />
</table>
}

export default Table;
