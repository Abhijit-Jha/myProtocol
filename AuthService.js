import { MyProtocol } from "./myProtocol.js";

const authService = new MyProtocol("AuthService", 9001);

authService.sendRequest(
  "OtpService",
  "Hey OTP service,Please Give OTP for the User 123 ?"
);

authService.getRequest((data, socket) => {
  console.log("hey User 123 your OTP is  : ", data);
});
