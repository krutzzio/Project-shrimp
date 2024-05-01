import { useEffect, useState } from "react";
import { instagramHashtag } from "../utils/fetchs/instagramHashtag";

export function useInstagramHashtag({ hashtag }) {
    const [instaPosts, setInstaPosts] = useState([])


    useEffect(() => {
        const fetch = async () => {
            const data = await instagramHashtag({ hashtag })
            if (!data.length) {
                return
            } else {
                setInstaPosts(JSON.parse(data).data)
            }
        }
        fetch()
    }, [hashtag])

    return { instaPosts }
}