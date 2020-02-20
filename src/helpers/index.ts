import jwt from "jsonwebtoken"
const key = require("../privatekey.json")

export function getAppleMusicAuthorizationToken() {
  let private_key = key.key

  // key identifier
  let kid = "F86N8L6SHT"
  // team ID
  let iss = "EY5SY49R72"
  // isuued at
  let iat = Math.round(new Date().getTime() / 1000)

  let token = jwt.sign(
    {
      iss,
      iat,
    },
    private_key,
    {
      algorithm: "ES256",
      keyid: kid,
      expiresIn: "180d",
    },
  )
  return `Bearer ${token}`
}
