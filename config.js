 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241";
global.sudo = process.env.SUDO || "2347069482550";
global.owner = process.env.OWNER_NUMBER || "2347069482550";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtnbkRlQUFWTnN5UjR1Tk1DVm05RFZFNFU3MHVsYS92WXByV3VheTMxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclEzc2VEeWR1V3ViTitDREFKNld4T0dldCtWemYxRklRT05pTDZUMFdGQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS3Z0d0dRdVVtVTVFaWtzTHN2NWRoUDBOb2h3RE1yc01NQW9QTUhzVjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdGVTaEpCeStLZ2V0OHRsMWFlUjJJM1E2eGpINStTd0VkYnI3ZnZyNFE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCSzdJcTlNOGpaS3dNMmZXdC8rZ3NPSC9KY1lEOU5VQ0FJdFhHTWRnMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRreVF3WmoraFpqVWVCaGxQYnRPQXJPMk10eU5nS1lNajBlMFVuK3orbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dRU0FQdCtLTVlReDRTVktXcWhVUHhNQ0RnREpMdW5ib0hkL3VmbHNrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2cvZ21BR25VRjh1NW9YRnRpbUkxbHJvaXhCOUE0WHRUZ1I2VFVyUlFHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxDYy8xNjNELzhZUWtUekNZaHh1MXlvSG1kNFZIRThOb2MrWG5jWWNUSmxOQW9valVTT3l4eWl5ZnprNnJvazRoZk84NXZKbWx5SDNMQU5pekI4eWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJ3QTlET0pRK2NMeC81RlAxd2ZTME1kV1BIUGFMR0xQUDlHUW5iQnN2WDNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHbGdfSUZNQlEtdXNzTTdjQjRDeFpRIiwicGhvbmVJZCI6ImE2MDdmY2UzLWQ4MGYtNDk1Zi04ZWNmLTBkYjdmNWM2ZTBjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTVc1S3BXa2M4ZXhZUXBYLzEwRXFCVldjT1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXF6QmN5WXVnQ3BCZitqeUZORUVQczFDdWZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRGTlM4NVIzIiwibWUiOnsiaWQiOiIyMzQ3MDY5NDgyNTUwOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVEQvZXdHRU4raWxyc0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOWGM3YnA4bm5WLzVUaXRWSVJYYnMwcVgxTjJIWkNXWXRSVXlobFpxUVM0PSIsImFjY291bnRTaWduYXR1cmUiOiJVZlB4bFpHNE03UkJobG5pdElPVmYzQjJaNGhOcjV4blU1SjhqYU5sbGlXQ1o0RU5PZGlxMDRtL1ZlaTFsNDFMUlVWNXBydjIwamF0YlR3aXp6dXdCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTRrY043TEt3MEtKS2dTZ3cwc3ROd1J6dWIwQTJaL1hPR3FRT3JCM1l4eXd5c1U5cWtaTThNL0ZEMkE3dVAyNzFTMHlzbDE3YXpqd0pJZHVlaDlQaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY5NDgyNTUwOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRWM08yNmZKNTFmK1U0clZTRVYyN05LbDlUZGgyUWxtTFVWTW9aV2FrRXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ3MDk2MTJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
