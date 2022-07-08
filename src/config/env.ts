import dotenv from "dotenv";
import ip from "ip";

const { parsed = {} } = dotenv.config();

export default {
    environment: parsed.NODE_ENV,
    port: parsed.PORT,
    myIp: ip.address(),
};
