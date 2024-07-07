const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918761888106";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_11_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpejB4OXdXSFZUNkxRNjc5VnFxR1NKL0dkOUVHS0loMnZ1aFduQXR3c2xBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRUGFSUFR6a1RLeWhHcjBvYW9lVUlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1Zjc4OWEzLWYyZmItNDFkMi1hY2NlLWNhNDk1ZjQ4ZTZlNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA5MyxcbiAgICAgIDYyLFxuICAgICAgMjIyLFxuICAgICAgMjEsXG4gICAgICAyMDIsXG4gICAgICAyMTMsXG4gICAgICAyMTYsXG4gICAgICAxMzcsXG4gICAgICAxNTEsXG4gICAgICAyNTUsXG4gICAgICAyMTQsXG4gICAgICA4MSxcbiAgICAgIDIwNyxcbiAgICAgIDE2MixcbiAgICAgIDE5OCxcbiAgICAgIDI3LFxuICAgICAgMTU5LFxuICAgICAgODYsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMzksXG4gICAgICAxNzYsXG4gICAgICAxNzUsXG4gICAgICAxNTIsXG4gICAgICAyMjEsXG4gICAgICA3NCxcbiAgICAgIDE1OCxcbiAgICAgIDIxNyxcbiAgICAgIDIyMixcbiAgICAgIDgsXG4gICAgICA4OSxcbiAgICAgIDEyMSxcbiAgICAgIDIwMCxcbiAgICAgIDExMixcbiAgICAgIDQ0LFxuICAgICAgODMsXG4gICAgICAxNzEsXG4gICAgICA1NyxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJZMWlJUTRxcW90QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwU1Jwemw3MEIrVmZsKzRTSGd2dStybFNVS0dIQitabW1WQVF6TVUyZ1RFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks4Z1N5ZlVuVkZHcHNwbkczY2RXM3dOMS9qTmNZK2Ruei81L1RsaE9UYzIvVTcrSVQ5K2phWkVnSVlzdjc4QVVOL2hTcFpZaTUwVlI1VTg4YmZ5N0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpmQXRNMnhiUE4zQXY2VFhhd0UzcUdyUnl6eFNPV1BzN3M1TjJqQzR6bDhiVWE0b0YxSTdsU1pQMjR1OTlUQ2p5cFAzem9ZQmF5N2hteWd6TERJU2h3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3ODkzOTg0OTEwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZ6TIPCdmYcg8J2eoiDwnZ6mXCIsXG4gICAgXCJsaWRcIjogXCIyMzc0NzMyNzE3Njg1ODo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3ODkzOTg0OTEwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMyNTQ3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxxU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUmdENzE1Q04ydnpubVFvdG5nVE50R0w5a0VuWjNyWFZQNnc1d0M1ZFcwUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjcyMzU3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHFULmpzb24iOiAie1wia2V5RGF0YVwiOlwib0NKYUhrVUtFYkVXTE4xVkVWVlJXRUE2UVk0Vm9uY211bWc4ME85SVJFbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjcyMzU3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2NTYwMTI4MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxxVS5qc29uIjogIntcImtleURhdGFcIjpcIjN5cldjWWFVSEV0MHJNSXlYY1BVOTNMWTNUWnZDSk92ZGpRWkdjd3JHMXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI3MjM1NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2NTg2NjA2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxxVi5qc29uIjogIntcImtleURhdGFcIjpcImE4UFdVS2RXTW85ZWJGN1ZKbmJxNXlXQjhMVW52UThHTm9SK3QzOGFuTjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzI3MjM1NzgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDIzNzc5MTQyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "いや、私が勝つ (\ (\ („• ֊ •„) ━O━O━━━━━━━━━ ・:。уσ ι¢нι тєηкαι「 ✉️ 」・:三 ━━━━━━━━━━━━━ ㅤㅤㅤㅤ ⛩️Շѧмѯ_️θѵэя🎋( ₊₉₁ ₉₆₁₄₄ ₇₇₁₁₆ )ཀㅤㅤㅤㅤⳜꓴƁ𐤠Ɽꓴ",
  botname : process.env.BOT_NAME  || "SUBARU-THE-GREAT",
  ownername:process.env.OWNER_NAME|| "D E B A T E J",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
