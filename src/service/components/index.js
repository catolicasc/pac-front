import {api} from "@/lib/axios";

const getServiceComponents = async () => {
    const {data} = await api.get("/components")
    return data
}

export {
    getServiceComponents
}
