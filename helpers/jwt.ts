import jwt, { Secret } from "jsonwebtoken";

export const GenJWT = (payload:any) => {
  return new Promise((resolve, reject) => {
    const PAYLOAD = payload;
    jwt.sign(
      PAYLOAD,
      process.env.SECRET_JWT as Secret,
      {
        expiresIn: "8h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};
