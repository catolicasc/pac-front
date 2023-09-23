const TableHead = ({heads = []}) => {

    return <thead>
    <tr className={"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"}>

        {heads.map(head => {
            return <th className={"py-3 px-6 text-left"}>
                {head}
            </th>
        })}
    </tr>
    </thead>
}

export default TableHead
