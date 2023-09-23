const TableBody = ({rows = []}) => {
    return <tbody className={"text-gray-600 text-sm font-light"}>
    {
         rows.map(row => {
            const dinamicRows = Object.keys(row)
            return <tr className={"border-b border-gray-200 hover:bg-gray-100"}>
                {
                    dinamicRows.map(dinamicRow => {
                        return <td className={"py-3 px-6 text-left whitespace-nowrap"}>{row[dinamicRow]}</td>
                    })
                }
            </tr>
        })
    }
    </tbody>
}

export default TableBody
