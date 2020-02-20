import Axios from "axios"
import { getAppleMusicAuthorizationToken } from "./helpers"

async function main() {
  let res = await Axios({
    method: "GET",
    url: `https://api.music.apple.com/v1/storefronts`,
    params: {
      ids: ["us"],
    },
    headers: {
      Authorization: getAppleMusicAuthorizationToken(),
    },
  })
  if (res.status === 200) {
    console.log(res.data)
  }
}

main().catch(err => console.log(err))
