import { MyProtocol } from "./myProtocol.js";

const otpService = new MyProtocol("OtpService", 9002);

otpService.getRequest((data, socket) => {
  console.log("The recieved data is  : ", data);
  otpService.sendRequest(
    "AuthService",
    "Hey auth service, i have recieved your request, the OTP for the user 123 is 192192."
  );
});
