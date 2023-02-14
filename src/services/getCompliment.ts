import axios from 'axios'

type GetCompliment = () => Promise<string>

export const getCompliment: GetCompliment = async () => {
    const { data } = await axios.get('https://complimentr.com/api')
    return data.compliment
}
